//importamos los modelos de moongose para acceder a sus métodos
var Cliente = require("../models/cliente");
var Producto = require("../models/producto");
var Consulta= require("../models/consultas-usuario");

let listarConsultas = (req,res)=> {
    let cliente = Cliente.findById(req.params.id);
    let consulta = Consulta.find({producto:req.params.id});

    //ejecutamos el metodo find para obtener los usuarios
    Producto.find()
    .then ((consulta)=>{
        return res.send(cliente)
    })
    .catch((err)=>{
        return res.send(err)
    })
}

let crearConsulta=(req,res)=>{
    Consulta.create(req.body)
    .then((consultaCreada)=>{
        return res.send({mensaje:"Consulta creada",detalle:consultaCreada})
    })
    .catch((errorCreando)=>{
        return res.send({mensaje:"No se pudo crear", error:errorCreando})
    })
}

//exportar modulos
module.exports={
    listarConsultas,
    crearConsulta,
}