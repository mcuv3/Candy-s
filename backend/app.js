const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const dulcesRutas = require("./routes/dulces");

app.use(cors());
app.use(bodyParser.json());

app.use(dulcesRutas);

mongoose
  .connect(
    "mongodb+srv://mcuve:dislexiaautismo1313@nodejs-wg1ao.mongodb.net/dulceria?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then((res) => {
    app.listen(5000);
  })
  .catch((e) => console.log(e));
