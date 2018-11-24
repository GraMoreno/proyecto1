//servicio para manejar JWT en la app
"use strict";

var jwt = require("jwt-simple")
var secret="ClaveSecreta";
// funcion que recibe un usuario para generar el JWT
exports.createToken = user => {
    // Definimos estrucutra del token
    let payload = {
      name: user.name,
      email: user.email,
    };
  
    //Devolvemos el token encodificado
    return jwt.encode(payload, secret);
  };