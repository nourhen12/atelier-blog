const mongoose = require('mongoose');
const CommandSchema = mongoose.Schema({
    nom: {
        type: String,
        trim: true,
        required: [true, 'name is required'],
    },
    prenom:  {
        type: String,
        trim: true,
        required: [true, 'prenom is required'],
    },
    mail: {
        type: String,
        trim: true,
        required: [true, 'mail is required'],
    },
    telephone:  {
        type: String,
        trim: true,
        required: [true, 'phone is required'],
    },
    ville:  {
        type: String,
        trim: true,
        required: [true, 'ville is required'],
    },
    adresse: {
        type: String,
        trim: true,
        required: [true, 'adresse is required'],
    },
    quatité:Number,
    couleur:String,
    PrixTotal:Number



});

module.exports = mongoose.model('Command', CommandSchema);