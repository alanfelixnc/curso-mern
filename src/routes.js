const express = require("express");
const bodyParser = require("body-parser");

const Usuario = require("./controllers/usuarios.controller");

const routes = express.Router();

routes.get("/home", function (req, res) {
  res.json({ message: "Ohayo Sekai" });
});
routes.post("/api/usuarios", bodyParser.json(), Usuario.create);

module.exports = routes;
