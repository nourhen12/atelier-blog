const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    label: String,
    description: String,
    price: Number,
    quantity: Number,
    brand: String,
    photo: String

});

module.exports = mongoose.model('Product', ProductSchema);