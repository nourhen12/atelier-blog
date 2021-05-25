const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    label: { type: String, required: true},
    description: String,
    price:   { type: Number, required: true, min: 0 },
    quantity: Number,
    brand: String,
    photo: String,
    categories:     [{ type: mongoose.Types.ObjectId, ref: 'Category' }],
  });

  module.exports = new mongoose.model('Product', productSchema);