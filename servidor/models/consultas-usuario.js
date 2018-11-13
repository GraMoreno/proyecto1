//import mongoose
var mongoose= require('mongoose');
//create objet schema
var Schema= mongoose.schema;
//create of modelo de consulta del usuario
let modeloConsultUser= Schema({
    idUsuario:{type: schema.ObjectId, require: true},
    idProducto:{type: schema.ObjectId, require: true},
    textoConsulta: {type: string,require: true},
    fecha:{type:Date, require:true},
    respondido:{type:boolean},
});

// exportamos
module.exports= mongoose.model('consultas-usuario',modeloConsultUser);