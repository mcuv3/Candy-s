require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dulcesRutas = require("./routes/dulces");

app.use(cors());
app.use(bodyParser.json());

app.use(dulcesRutas);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((res) => {
    app.listen(PORT);
  })
  .catch((e) => console.log(e));
