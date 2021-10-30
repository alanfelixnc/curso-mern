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
routes.delete("/api/usuarios/:_id", Usuario.remove);
routes.put("/api/usuarios", jsonParser, Usuario.update);

module.exports = routes;
