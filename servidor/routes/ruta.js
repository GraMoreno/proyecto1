const express = require('express');
const router = express.Router();

//Importamos el controlador del elemento categoria
let catController = require('../controladores/controlador-categorias');
//Importamos el controlador del elemento producto
let prodController = require('../controladores/controlador-productos');

//ahora se definen las rutas
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

//router.get('/', (req, res)=>{
//    res.send('Hello world');
//});


module.exports = router;