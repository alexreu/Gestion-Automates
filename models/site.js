let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let sitesSchema = Schema({
    _id: Schema.Types.ObjectId,
    nom: String,
    adresse: String,
    telephone: String,
    id_bassin: [{type: Schema.Types.ObjectId, ref:'bassins'}]
});

let sites = mongoose.model('sites', sitesSchema);