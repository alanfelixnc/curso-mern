const Usuario = require("../models/usuarios.model");

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
  create,
};
