const Produto = require("../models/produto.model");

const details = async function (req, res) {
  const { _id } = req.params;
  let product = null;
  if (_id) {
    product = await Produto.findOne({ _id });
  } else {
    product = await Produto.find();
  }
  return res.json(product);
};

const create = async function (req, res) {
  const { nome_produto, descricao_produto, preco_produto, qtd_produto } =
    req.body;
  let data = {};
  let product = await Produto.findOne({ nome_produto });
  if (!product) {
    data = {
      nome_produto,
      descricao_produto,
      preco_produto,
      qtd_produto,
    };
    product = await Produto.create(data);
    return res.status(200).json(product);
  } else {
    return res.status(500).json(product);
  }
};

const remove = async function (req, res) {
  const { _id } = req.params;
  const product = await Produto.findByIdAndDelete({ _id });
  return res.json(product);
};

const update = async function (req, res) {
  const { _id, nome_produto, descricao_produto, preco_produto, qtd_produto } =
    req.body;
  const data = {
    nome_produto,
    descricao_produto,
    preco_produto,
    qtd_produto,
  };
  const product = await Produto.findOneAndUpdate({ _id }, data, { new: true });
  return res.json(product);
};

module.exports = {
  details,
  create,
  remove,
  update,
};
