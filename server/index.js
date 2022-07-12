const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banco",
});

app.use(express.json());
app.use(cors());

// INSERT NEW VALUE
app.post("/newuser", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query("SELECT * FROM user WHERE email = ?", [email], 
    (err, result) => {
        if(err) {
            result.send({ msg: err})
            console.log(`Erro ao pesquisar ${err}`)
        }

        if(result.length == 0){
            db.query("INSERT INTO users (user_email, user_password) VALUES (?, ?)", [email, password],
                (err, result) => {
                    if(err) {
                        console.log(`Erro no insert: ${err}`)
                        res.send({msg: err})
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

app.listen(3010, ()=>{
    console.log("Rodando na porta 3010")
})
