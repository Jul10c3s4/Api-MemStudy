const mongoose= require("mongoose")

/*mongoose.connect("mongodb+srv://julio:96545146@cluster0.qhiu5ry.mongodb.net/Api-MemStudy?retryWrites=true&w=majority", {
  }).then(() => {
    console.log("MongoDB Conectado!!!");
  }).catch((erro) => {
    console.log("erro ao se connectar ao mongoDB"+erro);
  })*/

const CardSchema = mongoose.Schema({

  titulo: {
    type: String,
    required: true
  },

  assunto: {
    type: String,
    required: true
  },

  descricao: {
    type: String,
    required: true
  }
})

mongoose.model("cards", CardSchema)

/*const card = mongoose.model("cards")

new card({
  titulo: "Era Napoleônica",
  assunto: "História",
  descricao: "Era Napoleônica foi o periodo em que Napoleão Bonaparte governou a França e exerceu sua hegemonia"
}).save().then(() => {
  console.log("Card cadastrado com suceso");
}).catch((erro) => {
  console.log("houve um erro: "+ erro);
})*/
