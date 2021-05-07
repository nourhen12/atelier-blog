const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    "prenom": { type: String, required: true },
    "nom": { type: String, required: true },
    "email": String,
    " password": String,
    "phone": Number

});

module.exports = mongoose.model('user', userSchema);