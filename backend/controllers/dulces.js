const Dulce = require("../model/Dulce");

exports.getDulces = (req, res, next) => {
  res.json({
    nombre: "dulce",
    imageURL: "url secreta",
    descripcion: "dfsdgfsdfgsdfg",
  });
};

exports.postDulce = (req, res, next) => {
  const dulce = new Dulce({
    nombre,
    descripcion,
    imageURL: "https://source.unsplash.com/500x500/?candy,granel",
  });

  dulce.save().then((result) => {
    res.status(200);
  });
};
