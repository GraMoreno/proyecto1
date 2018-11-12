//import mongoose
var mongoose= require('mongoose');
//create objet schema
var Schema= mongoose.schema;
//create of model
var ProductSchema = Schema({
    codigo:{type: number, required: true},
    nombre: {type: string, required: true},
    descripcion: {type: string, required: true},
    precio: {type: number, required: true},
    categoria: {type: string, required: true},
    imagen: {type: string, required: true}
});
// export module
module.exports = mongoose.model('product', ProductSchema);