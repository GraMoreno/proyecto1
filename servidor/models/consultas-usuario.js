//import mongoose
var mongoose= require('mongoose');
//create objet schema
var Schema= mongoose.Schema;
//create of modelo de consulta del usuario
let modeloConsultUser= Schema({
    idUsuario:{type: Schema.ObjectId, ref:'usuario'},
    idProducto:{type: Schema.ObjectId, ref:'producto'},
    textoConsulta: {type: String,require: true},
    fecha:{type:String, require:true},
    respondido:{type:Boolean},
});

// exportamos
module.exports= mongoose.model('consultas-usuario',modeloConsultUser);