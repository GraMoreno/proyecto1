//import mongoose
var mongoose= require('mongoose');
//create objet schema
var Schema= mongoose.Schema;
//create of model
let modeloCategoria = Schema({
    nombre: {type: String, require: true},
    descripcion: {type: String,require: true}
});

module.exports = mongoose.model('categorias',modeloCategoria);

//let referenceCategoria = Schema({
 //   nombre: { type: String, require: true },
//    descripcion: { type: String, require: true }
//});

//module.exports = mongoose.model('categorias', referenceCategoria);
