const Dulce = require("../model/Dulce");

exports.getDulces = (req, res, next) => {
  Dulce.find().then((dulces) => {
    console.log(dulces);
    res.status(200).json({
      dulces,
    });
  });
};

exports.postDulce = (req, res, next) => {
  console.log(req.body);
  const dulce = new Dulce({
    ...req.body,
    imageURL: `https://source.unsplash.com/20${Math.floor(
      Math.random() * 11
    )}x20${Math.floor(Math.random() * 11)}/?candy,granel`,
  });
  dulce.save().then((result) => {
    res.status(200).json(result.data);
  });
};
