//importamos los modelos de moongose para acceder a sus métodos
var Producto = require("../models/producto");

let listarProductos = (req,res)=> {
    //ejecutamos el metodo find para obtener los productos
    Producto.find()
    .then ((Producto)=>{
        return res.send(Producto)
    })
    .catch((err)=>{
        return res.send(err)
    })
}

let crearProducto = (req,res)=>{
    //crear la variable con el producto
    Producto.create(req.body).then((productoCreado)=>{
        return res.send({mensaje:"Producto Creado", detalles: productoCreado})
    })
    .catch((errorCreando)=>{
        return res.send({mensaje:"No se puede crear", error: errorCreando})
    })
}
let actualizarProducto = (req,res)=>{
    Producto.findByIdAndUpdate(req.params.id,req.body)
    .then((productoActualizado)=>{
        return res.send({mensaje:"Actualizado"})
    })
    .catch((err)=>{
        return res.send({mensaje:err})
    })
}

let verProducto = (req,res)=>{
    Producto.findById(req.params.id)
    .populate('categorias')
    .then((Producto)=>{
        return res.send(Producto)
    })
    .catch((err)=>{
        return res.send({mensaje:"No se puedo encontrar el producto"})
    })
}

let eliminarProducto = (req,res)=>{
    Producto.findByIdAndRemove(req.params.id)
    //falta campo relacionado de categoria
    .then((catBorrada)=>{
        return res.send({mensaje:"El producto se elimino correctamente"})
    })
    .catch((error)=>{
        return res.send({mensaje:"No se puedo eliminar el producto"})
    })
}

//Exportamos el método
module.exports={
    listarProductos,
    crearProducto,
    actualizarProducto,
    verProducto,
    eliminarProducto
}
