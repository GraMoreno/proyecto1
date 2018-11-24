//importamos los modelos de moongose para acceder a sus métodos
var Cliente = require("../models/cliente");


let crearCliente = (req,res)=>{
    //crear la variable de cliente
    Cliente.create(req.body).then((clienteCreado)=>{
        return res.send({mensaje:"Cliente Creado", detalles: clienteCreado})
    })
    .catch((errorCreando)=>{
        return res.send({mensaje:"No se puede crear el cliente", error: errorCreando})
    })
}

let listarClientes = (req,res)=> {
    //ejecutamos el metodo find para obtener los usuarios
    Cliente.find()
    .then ((Cliente)=>{
        return res.send(Cliente)
    })
    .catch((err)=>{
        return res.send(err)
    })
}

let actualizarCliente = (req,res)=>{
    Cliente.findByIdAndUpdate(req.params.id,req.body)
    .then((clienteActualizado)=>{
        return res.send({mensaje:" Cliente Actualizado"})
    })
    .catch((err)=>{
        return res.send({mensaje:err})
    })
}

let verCliente=(req,res)=>{
    Cliente.findById(req.params.id)
    .then((Cliente)=>{
        return res.send(Cliente)
    })
    .catch((err)=>{
        return res.send({mensaje:"No se pudo encontrar el cliente"})
    })
}

let eliminarCliente=(req,res)=>{
    Cliente.findByIdAndRemove(req.params.id)
    .then(()=>{
        return res.send({mensaje:"El Cliente se elimino correctamente"})
    })
    .catch((error)=>{
        return  res.send({mensaje:"No se puedo eliminar el cliente"})
    })
}

//exportar los modulos
module.exports={
    listarClientes,
    crearCliente,
    verCliente,
    actualizarCliente,
    eliminarCliente,
}