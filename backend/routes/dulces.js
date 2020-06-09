const express = require("express");
const dulcesControllers = require("../controllers/dulces");
const Router = express.Router();

Router.get("/dulces", dulcesControllers.getDulces);

Router.post("/agregar-dulce", dulcesControllers.postDulce);

module.exports = Router;
