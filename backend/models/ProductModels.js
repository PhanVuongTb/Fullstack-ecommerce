import mongoose from "mongoose";

const schemaProduct = mongoose.Schema({
  name: String,
  category:String,
  image: String,
  price: String,
  description: String,
});
module.exports = mongoose.model("Product",schemaProduct)