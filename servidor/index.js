const path= require('path');
//import express
var express = require ('express');
//inicio de express
var app = express();
const cors = require('cors');

// requiero mongoose
const mongoose= require('mongoose');

// importar body parser
const bodyParser = require ('body-parser');
// para hacer las peticiones Posts
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let puerto = 3000;
let direccionBaseDatos = 'mongodb://localhost:27017/proyjoyeria';
//connecting databases
mongoose.connect(direccionBaseDatos, {useNewUrlParser:true}, (err,res)=>{
  if (err) { throw err;}
  else {
    console.log("se realizó la conexión a la base de datos" + direccionBaseDatos);
  }
  // empezamos a escuchar el puerto
  app.listen(process.env.PORT || puerto, ()=>{
    console.log("servidor corriendo en el puerto:" + puerto);
  });
});
//.then(db => console.log('base de datos conectada'))
//.catch(err => console.log(err));

//importando rutas
const indexRouter = require('./routes/ruta');

//middlewares
app.use(cors({origin:'http://localhost:4200'}));

//setting
//app.set('port', process.env.PORT || puerto);

//let mensaje ="estoy en hola";
//app.get ('/hola', (req,res)=>{
//    res.send({mensaje});
//})

//routers
app.use('/',indexRouter);

//starting the server
//app.listen(app.get('port'),()=>{
 //   console.log(`Server on port ${app.get('port')}`);
//})

