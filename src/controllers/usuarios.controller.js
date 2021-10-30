const Usuario = require("../models/usuarios.model");

const index = async function (req, res) {
  const user = await Usuario.find();
  return res.json(user);
};

const details = async function (req, res) {
  console.log(req.params);
  const { _id } = req.params;
  const user = await Usuario.findOne({ _id });
  return res.json(user);
};

const create = async function (req, res) {
  const { nome_usuario, email_usuario, tipo_usuario, senha_usuario } = req.body;

  let data = {};
  let user = await Usuario.findOne({ email_usuario });
  if (!user) {
    data = {
      nome_usuario,
      email_usuario,
      tipo_usuario,
      senha_usuario,
    };
    user = await Usuario.create(data);
    return res.status(200).json(user);
  } else {
    return res.status(500).json(user);
  }
};

module.exports = {
  index,
  details,
  create,
};
