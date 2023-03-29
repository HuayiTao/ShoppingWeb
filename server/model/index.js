const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: String,
  description: String,
  user: String,
  manufacturer: { type: ObjectId, ref: "Manufacturer" },
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
  user: String,
});

const userSchema = Schema({
  id: ObjectId,
  name: String,
  password: String,
});


const Product = model("Product", productSchema);
const Manufacturer = model("Manufacturer", manufacturerSchema);
const User = model("User", userSchema);


module.exports = { Product, Manufacturer, User };
