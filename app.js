const express = require('express')
const app = express()
const admin = require("./routes/admin")

//Conexão com o mongo
  const mongoose= require("mongoose")

  mongoose.connect("mongodb+srv://julio:96545146@cluster0.qhiu5ry.mongodb.net/Api-MemStudy?retryWrites=true&w=majority", {
    }).then(() => {
      console.log("MongoDB Conectado!!!");
    }).catch((erro) => {
      console.log("erro ao se connectar ao mongoDB"+erro);
    })

//rotas

app.use("/admin", admin)

app.listen(8081, () => {
  console.log("servidor rodando na porta 8081");
})