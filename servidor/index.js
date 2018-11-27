const path= require('path');
//import express
var express = require ('express');
//inicio de express
var app = express();

// requiero mongoose
const mongoose= require('mongoose');

// importar body parser
const bodyparser = require ('body-parser');
// para hacer las peticiones Posts
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

// Configuramos cabeceras HTTP
// Esto permitirá recibir peticiones de cualquier origen (nos servirá cuando utilicemos Angular)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*") //* to give access to any origin
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization" //to give access to all the headers provided
  );
  if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); //to give access to all the methods provided
      return res.status(200).json({});
  }
  next();
});


  let puerto = 3000;

  //connecting databases
let direccionBaseDatos ='mongodb://localhost/proyjoyeria';
//mongoose.connect('mongodb://localhost/proyjoyeria')
//.then(db => console.log('base de datos conectada'))
//.catch(err => console.log(err));

mongoose.connect(
    direccionBaseDatos,
    { useNewUrlParser: true },
    (err, res) => {
      if (err) {
        throw err;
      } else {
        console.log(
          "Se realizó la correción a la base de datos" + direccionBaseDatos
        );
        //Empezamos a escuchar el puerto
        app.listen(process.env.PORT || puerto, () => {
          console.log("Servidor corriendo en puerto: " + puerto);
        });
    }
  }
);

//importando rutas
const indexRouter = require('./routes/ruta');

//middlewares
//para entender los datos que envia un formulario
app.use(express.urlencoded({extended:false}));

//setting
// app.set('port', process.env.PORT || 3000);

let mensaje ="estoy en hola";
app.get ('/hola', (req,res)=>{
    res.send({mensaje});
})

//var usuario1 = Boolean = false;
//routers
//if (usuario1 == true) {
//  app.use(require('./routes/usuario'));
//}
app.use(indexRouter);

//starting the server
//app.listen(app.get('port'),()=>{
//    console.log(`Server on port ${app.get('port')}`);
//}
