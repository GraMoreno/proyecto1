//Creamos una instancia de express
var express = require('express');
//Importamos el controlador de usuario
let userController = require('../controladores/controlador-usuarios');

//Utilizamos el modulo router de Express
var router = express.Router();

// Importamos el middleware para manejar authenticacion
var md_auth = require ('../middlewares/auth');

//router.get('/user',(req,res,next)=>{
//    res.send("api rest");
//});


// Rutas de la App
router.get('/',userController.obtenerUsuarios);
router.post('/registro',userController.crearUsuario);
router.post('/login',userController.login);
router.get('/prueba',md_auth,userController.prueba);

// Lo exportamos para usar en app.js
module.exports = router;
