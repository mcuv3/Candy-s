const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const randomNumber = Math.floor(Math.random() * 11);

const dulceSchema = new Schema({
  Nombre: {
    type: String,
    require: true,
  },
  disponible: {
    type: Boolean,
    default: true,
  },
  Seccion: {
    type: String,
    require: true,
  },
  Descripcion: {
    type: String,
    require: true,
  },
  Precio: {
    type: Number,
    require: true,
  },
  imageURL: {
    type: String,
    default: `https://source.unsplash.com/20${randomNumber}x20${randomNumber}/?candy,granel`,
  },
});

module.exports = mongoose.model("Dulce", dulceSchema);
