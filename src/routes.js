import { Router } from "express";

const routes = Router();

routes.get("/home", function (req, res) {
  res.json({ message: "Ohayo Sekai" });
});

export default routes;
