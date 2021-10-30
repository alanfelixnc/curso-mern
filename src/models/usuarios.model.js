const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    nome_usuario: String,
    email_usuario: String,
    tipo_usuario: {
      type: Number,
      default: 1,
    },
    senha_usuario: String,
  },
  {
    timestamps: true,
  }
);
