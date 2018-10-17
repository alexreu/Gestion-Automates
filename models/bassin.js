const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let types_bassinsSchema = Schema({
    _id: Schema.Types.ObjectId,
    nom: String,
});

let bassinsSchema = Schema({
    _id: Schema.Types.ObjectId,
    nom: String,
    id_type: [{type: Schema.Types.ObjectId, ref:'Types_bassins'}],
    id_automate: [{type: Schema.Types.ObjectId, ref:'automate'}],
    id_site:[{type: Schema.Types.ObjectId, ref:'sites'}]
});

let Type_bassins = mongoose.model('Type_bassins', types_bassinsSchema);
let Bassins = mongoose.model('Bassins', bassinsSchema);