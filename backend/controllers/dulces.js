const Dulce = require("../model/Dulce");
const { validationResult } = require("express-validator");

exports.getDulces = (req, res, next) => {
  Dulce.find().then((dulces) => {
    res.status(200).json({
      dulces,
    });
  });
};

exports.postDulce = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).send({
      errors: errors.array(),
    });
  }
  const randomNumber = Math.floor(Math.random() * 11);
  const imageURL = `https://source.unsplash.com/20${randomNumber}x20${randomNumber}/?candy,granel`;

  const dulce = new Dulce({
    ...req.body,
    imageURL,
    disponible: true,
  });
  dulce.save().then((result) => {
    res.status(200).json(result.data);
  });
};

exports.postCambiarDisponibilidad = (req, res, next) => {
  const _id = req.body._id;
  Dulce.findById(_id)
    .then((dulce) => {
      dulce.disponible = !dulce.disponible;
      return dulce.save();
    })
    .then((result) => {
      res.status(200).send(true);
    })
    .catch((err) => {
      res.status(300).send({ err });
    });
};
