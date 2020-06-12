const express = require("express");
const dulcesControllers = require("../controllers/dulces");
const Router = express.Router();
const { body } = require("express-validator");

Router.get("/dulces", dulcesControllers.getDulces);

Router.post(
  "/agregar-dulce",
  [
    body("Nombre", "Nombre muy corto o largo")
      .isLength({ min: 3, max: 40 })
      .trim(),
    body("Descripcion", "Descripcion muy corta o larga")
      .isLength({
        min: 15,
        max: 100,
      })
      .trim(),
    body("Seccion", "Debes elegir una opción").isLength({ min: 1 }).trim(),
    body("Precio", "Debe de ser un número").isFloat().trim(),
  ],
  dulcesControllers.postDulce
);

Router.post(
  "/cambiar-disponiblidad",
  dulcesControllers.postCambiarDisponibilidad
);

module.exports = Router;
