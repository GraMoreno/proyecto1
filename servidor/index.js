//import express
var express = require ('express');
//inicio de express
var app = express();
// importar body parser
const bodyparser = require ('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
let mensaje ="estoy en hola";
app.get ('/hola', (req,res)=>{
    res.send({mensaje});
})

app.listen(3000,()=>{
    console.log('api rest corriendo en localhost 3000')
})
