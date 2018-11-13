//import mongoose
var mongoose= require('mongoose');
//create objet schema
var Schema= mongoose.schema;
//create of model
let modeloCategoria = Schema( {
    nombre:{type: string, require: true},
    descripcion: {type: string,require: true}
});

module.exports = mongoose.model('categorias',modeloCategoria);