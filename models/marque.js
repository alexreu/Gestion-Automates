let mongoose = require('mongoose');

let MarquesSchema = new mongoose.Schema({
    nom: String
});

module.exports = mongoose.model('Marques', MarquesSchema);