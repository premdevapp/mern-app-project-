const express = require("express");
const bodyParser = require("body-parser");
const properties = require("./config/properties.js");
const db = require("./config/db.js");

const productRoutes = require("./products/product.routes.js");

db();

const productRouter = express.Router();
productRoutes(productRouter);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/productapi", productRouter);

app.get("/", (req, res, next) => {
  res.send("<strong>Express is super cool and easy...</strong>");
});

app.listen(properties.PORT, (err) => {
  if (err) throw err;
  console.log("listening on localhost ", properties.PORT);
});
