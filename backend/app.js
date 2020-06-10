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

mongoose
  .connect(
    "mongodb+srv://mcuve:dislexiaautismo1313@nodejs-wg1ao.mongodb.net/dulceria?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then((res) => {
    app.listen(PORT);
  })
  .catch((e) => console.log(e));
