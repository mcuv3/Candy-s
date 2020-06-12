const Dulce = require("../model/Dulce");
const { validationResult } = require("express-validator");

exports.getDulces = async (req, res, next) => {
  try {
    const dulces = await Dulce.find();
    res.status(200).json({ dulces });
    return;
  } catch (err) {
    res.status(422).json({ err: "Algo salió mal :(" });
    next();
    return err;
  }
};

exports.postDulce = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send({
      errors: errors.array(),
    });
  }

  try {
    const dulce = new Dulce({ ...req.body });
    const result = await dulce.save();
    res.status(200).json(result);
    return;
  } catch (err) {
    res.status(500).json(err);
    return err;
  }
};

exports.postCambiarDisponibilidad = async (req, res, next) => {
  const _id = req.body._id;
  try {
    const dulce = await Dulce.findById(_id);
    dulce.disponible = !dulce.disponible;
    const result = await dulce.save();
    res.status(200).send(result.disponible);
    return;
  } catch (err) {
    res.status(422).json({ err: "Algo salió mal!!" });
    next();
    return err;
  }
};
