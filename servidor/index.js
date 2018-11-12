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
app.use(bodyparser.urlencoded({extended:false}));
app.use (bodyparser.json());

//connecting databases
mongoose.connect('mongodb://localhost/producto')
.then(db => console.log('base de datos conectada'))
.catch(err => console.log(err));

//importando rutas
const indexRouter = require('./routes/ruta');

//middlewares
//para entender los datos que envia un formulario
app.use(express.urlencoded({extended:false}));

//setting
app.set('port', process.env.PORT || 3000);

let mensaje ="estoy en hola";
app.get ('/hola', (req,res)=>{
    res.send({mensaje});
})

//routers
app.use('/',indexRouter);

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})
