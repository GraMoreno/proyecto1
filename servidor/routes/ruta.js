const express = require('express');
const router = express.Router();
// Importamos el middleware para manejar authenticacion
var md_auth = require ('../middlewares/auth');


let userController = require('../controladores/c-usuario');
let usuarioController = require('../controladores/controlador-usuarios');

//Importamos el controlador del elemento categoria
let catController = require('../controladores/controlador-categorias');
//Importamos el controlador del elemento producto
let prodController = require('../controladores/controlador-productos');
//Importamos el controlador del elemento cliente
let cliController= require('../controladores/controlador-cliente');
//Importamos el controlador del elemento consultas del cliente
let consuController = require('../controladores/controlador-consultas');

router.get('/',(req,res,next)=>{
    res.send("hello world")
});

// localhost:3000/usuarioa
router.get('/usuarioa', userController.obtenerUsuario);
router.post('/usuarioa', userController.crearUsuario);
router.get('/usuarioa/:id',userController.buscarUsuario);
router.put('/usuarioa/:id',userController.actualizarUsuario);
router.delete('/usuarioa/:id', userController.eliminarUsuario);
 //para leer ruta usuario login
 router.get('/api/usuarios',usuarioController.obtenerUsuarios);
 router.post('/api/usuarios/registro',usuarioController.crearUsuario);
 router.post('api/usuarios/login',usuarioController.login);
router.get('/api/usuarios/prueba',md_auth,usuarioController.prueba);


//para el resto de los modelos

//ahora se definen las rutas categorias
router.get('/categorias',catController.listarCategorias);
router.post('/catergorias',catController.crearCategoria);
router.get('/categorias/:id',catController.verCatergoria);
router.post('/categorias/:id',catController.actualizarCategoria);
router.post('/categorias/eliminar/:id',catController.eliminarCategoria);
router.get('/ver-por-categorias/:id',catController.verPorCategoria);

//rutas de producto
router.get('/productos',prodController.listarProductos);
router.post('/productos',prodController.crearProducto);
router.get('/productos/:id',prodController.verProducto);
router.get('/productos/:id',prodController.eliminarProducto);

//rutas de cliente
router.get('/clientes',cliController.listarClientes);
router.post('/clientes',cliController.crearCliente);
router.get('/clientes/:id',cliController.verCliente);

//rutas de consultas del cliente
router.get ('/consultaCliente',consuController.listarConsultas);
router.post ('/consultaCliente',consuController.crearConsulta);

// Lo exportamos para usar en app.js
module.exports = router;