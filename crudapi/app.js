const express = require("express");
const bodyParser = require("body-parser");

const productRouter = require("./productController");
const customerRouter = require("./customerController");

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/productapi", productRouter);
app.use("/customerapi", customerRouter);

app.get("/", (req, res, next) => {
  res.send("<strong>Express is super cool and easy...</strong>");
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log("listening on localhost ", port);
});
