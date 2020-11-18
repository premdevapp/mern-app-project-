const express = require("express");
const roueter = express.Router();

const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017";
const database_name = "products";

mongoose.connect(`${dbUrl}/${database_name}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

//mention collection
const Product = mongoose.model("Product", productSchema);

roueter.get("/", (req, res, next) => {
  res.send("<strong>Product Api</strong>");
});

roueter.get("/products", (req, res, next) => {
  Product.find()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      console.log(err);
    });
});

roueter.get("/products/:id", (req, res, next) => {
  Product.findById(req.params.id)
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      console.log(err);
    });
});

roueter.post("/products", (req, res, next) => {
  const product = new Product(req.body);
  product
    .save()
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      console.log(err);
    });
});

roueter.put("/products/:id", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  Product.findOneAndUpdate(
    { _id: req.params.id },
    { $set: product },
    { useFindAndModify: false }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

roueter.patch("/products/:id", (req, res, next) => {
  Product.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { useFindAndModify: false }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

roueter.delete("/products/:id", (req, res, next) => {
  Product.findOneAndDelete({ _id: req.params.id }, { useFindAndModify: false })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = roueter;
