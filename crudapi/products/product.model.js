import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

module.exports = productSchema;
