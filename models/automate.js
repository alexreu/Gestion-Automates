let mongoose = require('mongoose');

let AutomatesSchema = new mongoose.Schema({
    nom: String,
    serial: String,
    configuration: String,
    id_marques: [{type: mongoose.Schema.ObjectId, ref:'Marques'}],
    id_types: [{type: mongoose.Schema.ObjectId, ref:'Types_automates'}]
});

module.exports = mongoose.model('Automate', AutomatesSchema);