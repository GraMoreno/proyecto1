//importamos los modelos de moongose para acceder a sus métodos
var Categoria = require("../models/categorias");
var Producto = require("../models/producto");

let listarCategorias = (req, res)=> {
    //ejecutamos el metodo find para obtener las categorias
    Categoria.find()
    .then ((Categoria)=>{
        return res.send(Categoria)
    })
    .catch((err)=>{
        return res.send(err)
    })
}

let crearCategoria = (req , res)=> {
 Categoria.create(req.body)
 .then((categoriaCreada)=>{
   return res.send({mensaje:"Categoria Creada", detalle:categoriaCreada})
 })   
 .catch((errorCreando)=>{
     return res.send({mensaje:"No se puedo crear categoria", error:errorCreando})
 })
}

let actualizarCategoria = (req,res)=>{
    Categoria.findByIdAndUpdate(req.params.id,req.body)
    .then((categoriaActualizada)=>{
        return res.send({mensaje:"Actualizado"})
    })
    .catch((err)=>{
        return res.send({mensaje:err})
    })
}

let verCatergoria = (req, res)=>{
    Categoria.findById(req.params.id)
    .then((Categoria)=>{
        return res.send(Categoria)
    })
    .catch((err)=>{
        return res.send({mensaje:"No se pudo encontrar la categoria"})
    })
}

let eliminarCategoria = (req, res)=>{
    Categoria.findByIdAndRemove(req.params.id)
    .then((catBorrada)=>{
        return res.send({mensaje:"La categoria se elimino correctamente"})
    })
    .catch((error)=>{
        return  res.send({mensaje:"No se puedo eliminar la Categoria"})
    })
}

let verPorCategoria = (req, res)=>{
    let categoria = Categoria.findById(req.params.id);
    let productoDeCategoria = Producto.find({categoria:req.params.id});
    categoria.then((categoria)=>{
        productoDeCategoria.then((producto)=>{
            res.send ({categoria,Producto})
        })
    })
}

// exportamos el método
module.exports={
    listarCategorias,
    crearCategoria,
    actualizarCategoria,
    verCatergoria,
    eliminarCategoria,
    verPorCategoria
}