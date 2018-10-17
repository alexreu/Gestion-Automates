let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Types_automatesSchema = Schema({
    nom: String
});

module.exports = mongoose.model('Types_automates',Types_automatesSchema);
