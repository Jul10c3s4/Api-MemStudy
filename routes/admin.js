const express = require("express");
const router = express()
const mongoose = require("mongoose");
require("../models/card");
const cards = mongoose.model("cards");

router.get("/", async (req, res) => {
  cards.find().then((dados) =>{
    res.status(200).json(dados)
  }).catch((erro) => {
    console.log("houve um erro: "+erro);
  })
})

module.exports = router