const express = require("express");

const Usuario = require("./controllers/usuarios.controller");
const Produto = require("./controllers/produtos.controller");

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

routes.get("/api/produtos", Produto.details);
routes.get("/api/produtos/:_id", Produto.details);
routes.post("/api/produtos", jsonParser, Produto.create);
routes.delete("/api/produtos/:_id", Produto.remove);
routes.put("/api/produtos", jsonParser, Produto.update);

module.exports = routes;
