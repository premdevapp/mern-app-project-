import dao from "./product.dao.js";

exports.getAll = (req, res) => {
  dao.get({}, (err, products) => {
    if (err) console.error(err);
    res.send(products);
  });
};

exports.findById = (req, res) => {
  dao.get({ _id: req.params.id }, (err, product) => {
    if (err) console.error(err);
    res.send(product);
  });
};

exports.create = (req, res) => {
  const product = req.body;
  dao.create(product, (err, product) => {
    if (err) console.error(err);
    res.send(product);
  });
};

exports.update = (req, res) => {
  const product = { name: req.body.name, price: req.body.price };
  dao.update({ _id: req.params.id }, product, (err, result) => {
    if (err) console.error(err);
    res.send(result);
  });
};
exports.patch = (req, res) => {
  const product = req.body;
  dao.patch({ _id: req.params.id }, product, (err, result) => {
    if (err) console.error(err);
    res.send(result);
  });
};

exports.delete = (req, res) => {
  dao.delete({ _id: req.params.id }, (err, result) => {
    if (err) console.error(err);
    res.send(result);
  });
};
