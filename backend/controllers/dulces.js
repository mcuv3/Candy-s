const Dulce = require("../model/Dulce");
const { validationResult } = require("express-validator");

exports.getDulces = (req, res, next) => {
  Dulce.find().then((dulces) => {
    console.log(dulces);
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
  });
  dulce.save().then((result) => {
    res.status(200).json(result.data);
  });
};
