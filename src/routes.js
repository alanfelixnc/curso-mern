const express = require("express");

const Usuario = require("./controllers/usuarios.controller");

const routes = express.Router();
const jsonParser = express.json();

routes.get("/", function (req, res) {
  res.json({ message: "Ohayo Sekai" });
});
routes.get("/api/usuarios", Usuario.details);
routes.get("/api/usuarios/:_id", Usuario.details);
routes.post("/api/usuarios", jsonParser, Usuario.create);

module.exports = routes;
