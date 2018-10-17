let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let villesSchema = Schema({
    _id: Schema.Types.ObjectId,
    nom: String,
    code_postal: String,
    id_site: [{type: Schema.Types.ObjectId, ref:'site'}]
});

let villes = mongoose.model('villes', villesSchema);