const express = require('express')
const app = express()
const admin = require("./routes/admin")
require('dotenv').config() 
//Conexão com o mongo
  const mongoose= require("mongoose")

  /*const DB_USER = process.env.DB_USER
  const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD) */

  const url = "mongodb://julio:96545146@ac-djbanuf-shard-00-00.qhiu5ry.mongodb.net:27017,ac-djbanuf-shard-00-01.qhiu5ry.mongodb.net:27017,ac-djbanuf-shard-00-02.qhiu5ry.mongodb.net:27017/Api-MemStudy?ssl=true&replicaSet=atlas-e2e8c0-shard-0&authSource=admin&retryWrites=true&w=majority"
  mongoose.connect(url, {
    }).then(() => {
      console.log("MongoDB Conectado!!!");
    }).catch((erro) => {
      console.log("erro ao se connectar ao mongoDB"+erro);
    })

//rotas

app.use("/admin", admin)

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log("Aplicação rodando na porta: "+PORT);
})