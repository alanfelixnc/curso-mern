const express = require("express");

const routes = express.Router();

routes.get("/home", function (req, res) {
  res.json({ message: "Ohayo Sekai" });
});

module.exports = routes;
