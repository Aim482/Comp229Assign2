var mongoose = require('mongoose');

var ProductsSchema = new mongoose.Schema({
  name: String,
  email: String,
  description: String,
  price: Number,
  quantity: Number,
  categories: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories'
  }
});

module.exports = mongoose.model('Products', ProductsSchema)