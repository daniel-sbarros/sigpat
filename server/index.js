const express = require("express");
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "reactdb"
})

// app.get("/", (req,res)=>{
//     res.send('Hello World')
// })

// app.get("/", (req, res)=>{
//     db.query(
//         "INSERT INTO user (email, password, ultimoacesso, user_img) VALUES" +
//         "('teste@teste.com', '1234', CURRENT_TIMESTAMP, null )", 
//         (err, result)=>{
//             if(err) console.log(err)
//         }
//     )
// })

app.listen(3001, ()=>{
    console.log("Rodando na porta 3001")
})
