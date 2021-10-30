import { Schema } from "mongoose";

const DataSchema = new Schema(
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
