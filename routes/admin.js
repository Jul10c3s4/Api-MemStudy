const express = require("express");
const router = express()
const mongoose = require("mongoose");
require("../models/card");
const Card = mongoose.model("cards");

router.get("/", async (req, res) => {
  Card.find().then((dados) =>{
    res.status(200).json(dados)
  }).catch((erro) => {
    console.log("houve um erro: "+erro);
  })
})

router.post("/add", async (req, res) => {
  const {titulo, assunto, descricao} = req.body

  if(!titulo){
    res.status(422).json({error: "o nome é necessário!"})
    return
  }
  if(!assunto){
    res.status(422).json({error: "o assunto é necessário!"})
    return
  }
  if(!descricao){
    res.status(422).json({error: "a descricao é necessária!"})
    return
  }
  const card = {
    titulo,
    assunto,
    descricao
  }

  try{
    await Card.create(card)
    
    res.status(201).json({message: "card criado"})
  }catch(erro){
    res.status(500).json({erro: erro})    
  }
})

router.get("/:id", async (req, res) =>{
  //extrair dados da requisição pela url 
  const id = req.params.id

  try{
    const card = await Card.findOne({_id: id})
    if(!card){
      res.status(422).json({messagem: "usuário ão encontrado!"})
      return
    }
    res.status(200).json(card)
  } catch(error){
    res.status(500).json({erro: error})
  }
})

router.patch("/:id", async(req, res) => {
  const id = req.params.id

  const {titulo, assunto, descricao} = req.body

  const card = {
    titulo, 
    assunto, 
    descricao
  }

  try{
    const updatedCard = await Card.updateOne({_id: id}, card)
    console.log(updateCard)
if(updateCard.matchedCount === 0){
  res.status(422).json({message: "card atualizado!"})
  return
}
    res.status(200).json(card)
  }catch(error){
    res.status(500).json({erro: error})
  }
})

router.delete("/:id", async (req, res) =>{
  const id = req.params.id
   const card = await Card.findOne({_id: id})
    if(!card){
      res.status(422).json({messagem: "usuário não encontrado!"})
      return
    }
  try{
    await Card.deleteOne({_id: id})
    res.status(200).json({messagem: "usuário removido!"})
  }catch(error){
    res.status(500).json({erro: error})
  }
  
})

module.exports = router