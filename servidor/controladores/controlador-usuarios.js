//importamos los modelos de moongose para acceder a sus métodos
var Usuario = require("../models/usuario");

let listarUsuarios = (req,res)=> {
    //ejecutamos el metodo find para obtener los usuarios
    Usuario.find()
    .then ((Usuario)=>{
        return res.send(Usuario)
    })
    .catch((err)=>{
        return res.send(err)
    })
}

let crearUsuario = (req,res)=>{
    //crear la variable de usuario
    Usuario.create(req.body).then((usuarioCreado)=>{
        return res.send({mensaje:"Usuario Creado", detalles: usuarioCreado})
    })
    .catch((errorCreando)=>{
        return res.send({mensaje:"No se puede crear", error: errorCreando})
    })
}
let actualizarUsuario = (req,res)=>{
    Usuario.findByIdAndUpdate(req.params.id,req.body)
    .then((usuarioActualizado)=>{
        return res.send({mensaje:"Actualizado"})
    })
    .catch((err)=>{
        return res.send({mensaje:err})
    })
}

let verUsuario=(req,res)=>{
    Usuario.findById(req.params.id)
    .then((Usuario)=>{
        return res.send(Usuario)
    })
    .catch((err)=>{
        return res.send({mensaje:"No se pudo encontrar el usuario"})
    })
}

let eliminarUsuario=(req,res)=>{
    Usuario.findByIdAndRemove(req.params.id)
    .then(()=>{
        return res.send({mensaje:"El Usuario se elimino correctamente"})
    })
    .catch((error)=>{
        return  res.send({mensaje:"No se puedo eliminar el usuario"})
    })
}

//exportar los modulos
module.exports={
    listarUsuarios,
    crearUsuario,
    verUsuario,
    actualizarUsuario,
    eliminarUsuario,
}