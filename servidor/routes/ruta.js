const express = require('express');
const router = express.Router();

//Importamos el controlador del elemento categoria
let catController = require('../controladores/controlador-categorias');
//Importamos el controlador del elemento producto
let prodController = require('../controladores/controlador-productos');
//Importamos el controlador del elemento usuarios
let userController= require('../controladores/controlador-usuarios');
//Importamos el controlador del elemento consultas del usuario
let consuController = require('../controladores/controlador-consultas');

//ahora se definen las rutas categorias
router.get('/',catController.listarCategorias);
router.post('/',catController.crearCategoria);
router.get('/categorias/:id',catController.verCatergoria);
router.post('/categorias/:id',catController.actualizarCategoria);
router.post('/categorias/eliminar/:id',catController.eliminarCategoria);
router.get('/ver-por-categorias/:id',catController.verPorCategoria);

//rutas de producto
router.get('/productos',prodController.listarProductos);
router.post('/productos',prodController.crearProducto);
router.get('/productos/:id',prodController.verProducto);
router.get('/productos/:id',prodController.eliminarProducto);

//rutas de usuario
router.get('/usuarios',userController.listarUsuarios);
router.post('/usuarios',userController.crearUsuario);
router.get('/usuarios/:id',userController.verUsuario);

//rutas de consultas del usuario
router.get ('/consultasUsuario',consuController.listarConsultas);
router.post ('/consultaUsuario',consuController.crearConsulta);


//router.get('/', (req, res)=>{
//    res.send('Hello world');
//});


module.exports = router;