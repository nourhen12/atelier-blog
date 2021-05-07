const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    "label": { type: String, required: true },
    "description": String,
    "price": Number,
    "quantity": Number,
    "brand": String,
    "photo": String

});

module.exports = mongoose.model('Product', ProductSchema);