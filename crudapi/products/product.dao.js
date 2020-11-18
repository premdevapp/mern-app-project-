import mongoose from "mongoose";
import productSchema from "./product.model.js";

productSchema.statics = {
  get: function (query, callback) {
    this.find(query, callback);
  },
  create: function (data, callback) {
    const product = this(data);
    product.save(callback);
  },
  update: function (query, updateData, callback) {
    this.findOneAndUpdate(
      query,
      { $set: updateData },
      { useFindAndModify: false },
      callback
    );
  },
  patch: function (query, updateData, callback) {
    this.findOneAndUpdate(
      query,
      { $set: updateData },
      { useFindAndModify: false },
      callback
    );
  },
  delete: function (query, callback) {
    this.findOneAndDelete(query, { useFindAndModify: false }, callback);
  },
};

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
