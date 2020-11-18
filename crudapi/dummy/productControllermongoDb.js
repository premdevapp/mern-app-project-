const express = require("express");
const roueter = express.Router();

const mongo = require("mongodb");
const mongoClient = mongo.MongoClient;
const dbUrl = "mongodb://localhost:27017";
const collection_name = "product";

let db;

mongoClient.connect(
  dbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, con) => {
    if (err) console.log(err);
    db = con.db("products");
  }
);

roueter.get("/", (req, res, next) => {
  res.send("<strong>Product Api</strong>");
});

roueter.get("/products", (req, res, next) => {
  db.collection(collection_name)
    .find()
    .toArray((err, products) => {
      if (err) console.log(err);
      res.send(products);
    });
});

roueter.get("/products/:id", (req, res, next) => {
  db.collection(collection_name).findOne(
    { _id: mongo.ObjectId(req.params.id) },
    (err, product) => {
      if (err) console.log(err);
      res.send(product);
    }
  );
});

roueter.post("/products", (req, res, next) => {
  db.collection(collection_name).insert(req.body, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

roueter.put("/products/:id", (req, res, next) => {
  db.collection(collection_name).updateOne(
    { _id: mongo.ObjectId(req.params.id) },
    { $set: { name: req.body.name, price: req.body.price } },
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});

roueter.patch("/products/:id", (req, res, next) => {
  db.collection(collection_name).updateOne(
    { _id: mongo.ObjectId(req.params.id) },
    { $set: req.body },
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});

roueter.delete("/products/:id", (req, res, next) => {
  db.collection(collection_name).remove(
    { _id: mongo.ObjectId(req.params.id) },
    (err, response) => {
      if (err) console.log(err);
      res.send(response);
    }
  );
});

module.exports = roueter;
