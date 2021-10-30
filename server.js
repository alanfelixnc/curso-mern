import express, { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { connect } from "mongoose";

import routes from "./src/routes";

const app = express();
const port = process.env.port || 5000;

connect(
  "mongodb://localhost:27017/curso-basico-mern",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully connected to MongoDB!");
    }
  }
);

app.use(routes);

app.use(cors());
app.use(cookieParser());
app.use(json());

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
