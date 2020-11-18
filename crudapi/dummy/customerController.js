const express = require("express");
const roueter = express.Router();

//product

const customers = [
  {
    id: 1,
    name: "Premnath",
    email: "premnath@premnath.com",
    salary: 5000000,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@bob.com",
    price: 100000,
  },
];

roueter.get("/", (req, res, next) => {
  res.send("Customer Api");
});

roueter.get("/customers", (req, res, next) => {
  res.send(customers);
});

roueter.get("/customers/1", (req, res, next) => {
  res.send(customers[0]);
});

roueter.post("/customers", (req, res, next) => {
  res.send(customers);
});

roueter.put("/customers", (req, res, next) => {
  res.send(customers[0]);
});

roueter.delete("/customers", (req, res, next) => {
  res.send(customers[0]);
});

module.exports = roueter;
