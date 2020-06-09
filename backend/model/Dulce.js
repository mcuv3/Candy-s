const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dulceSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  },
  decripcion: {
    type: String,
    require: true,
  },
  imageURL: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Dulce", dulceSchema);
