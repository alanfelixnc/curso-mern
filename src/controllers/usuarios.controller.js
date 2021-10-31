const Usuario = require("../models/usuario.model");

const details = async function (req, res) {
  const { _id } = req.params;
  let user = null;
  if (_id) {
    user = await Usuario.findOne({ _id });
  } else {
    user = await Usuario.find();
  }
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

const remove = async function (req, res) {
  const { _id } = req.params;
  const user = await Usuario.findByIdAndDelete({ _id });
  return res.json(user);
};

const update = async function (req, res) {
  const { _id, nome_usuario, email_usuario, senha_usuario, tipo_usuario } =
    req.body;
  const data = {
    nome_usuario,
    email_usuario,
    senha_usuario,
    tipo_usuario,
  };
  const user = await Usuario.findOneAndUpdate({ _id }, data, { new: true });
  return res.json(user);
};

module.exports = {
  details,
  create,
  remove,
  update,
};
