import mongoose from "mongoose";
import dbURL from "./properties.js";
module.exports = function () {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose.connect(dbURL.DB, options);
};
