const express = require("express");
const app = express()
const mysql = require("mysql")
const cors = require("cors");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
})

app.use(express.json())
app.use(cors())

// INSERT NEW VALUE
app.post("/newuser", (req, res) => {
    console.log("Método: app.post")
    const email = req.body.email
    const password = req.body.password

    db.query("SELECT * FROM user WHERE email = ?", [email], 
    (err, result) => {
        if(err) {
            result.send(err)
            console.log(err)
        }

        if(result.length == 0){
            db.query("INSERT INTO user (user_email, user_password) VALUES (?, ?)", [email, password],
                (erro, resultado) => {
                    if(erro) {
                        console.log(erro)
                        res.send(erro)
                    }else{
                        res.send({ msg: "Cadastrado com sucesso." })
                        console.log("Cadastrado com sucesso.")
                    }
                }
            )
        }
        else{
            console.log("Usuário já cadastrado.")
            res.send({ msg: "Usuário já cadastrado." })
        }
    })
})

app.listen(3001, ()=>{
    console.log("Rodando na porta 3001")
})
