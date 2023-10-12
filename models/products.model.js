var mongoose = require('mongoose');

var ProductsSchema = new mongoose.Schema({
  name: String,
  email: String,
  description: String,
  price: Number,
  quantity: Number,
  categories: {
    name: String,
    enum: ["Men", "Women", "Teen"]
  }
});

module.exports = mongoose.model('Products', ProductsSchema)