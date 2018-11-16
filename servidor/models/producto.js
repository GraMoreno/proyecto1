//import mongoose
var mongoose= require('mongoose');
//create objet schema
var Schema= mongoose.Schema;
//create of model
var ProductSchema = Schema({
    codigo:{type: String, required: true},
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
    categoria: {type: Schema.ObjectId, ref:'categorias'},
    imagen: {type: String, required: true}
});
// export module
module.exports = mongoose.model('product', ProductSchema);