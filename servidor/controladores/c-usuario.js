const express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;
//importamos los modelos de moongose para acceder a sus métodos

var  Usuarioa = require('../models/usuario');

let obtenerUsuario = (req,res)=>{
    Usuarioa.find((err, docs) => {
        if (!err) {res.send(docs);}
        else {console.log("Error recibiendo usuarios:" + JSON.stringify(err, undefined,2));}
    });
};

let buscarUsuario = (req, res) => {
    if(!ObjectId.isValid(req.params.id))
     return res.status(400).send(`no hay registro con el id: ${req.params.id}`);

    Usuarioa.findById(req.params.id, (err, docs)=>{
        if (!err) {res.send(docs);}
        else {console.log("Error recibiendo al usuario:" + JSON.stringify(err, undefined,2));}
    });
};

let crearUsuario =  (req, res)=>{
    var user = new Usuarioa({
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
    });
    user.save((err, docs)=>{
        if (!err) {res.send(docs);}
        else {console.log("Error en save usuarios:" + JSON.stringify(err, undefined,2));}
    });
};
let actualizarUsuario = (req, res) => {
    if(!ObjectId.isValid(req.params.id))
     return res.status(400).send(`no hay registro con el id: ${req.params.id}`);
     var user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
    };
    Usuarioa.findByIdAndUpdate(req.params.id, {$set:user}, {new : true}, (err, docs)=>{
        if (!err) {res.send(docs);}
        else {console.log("Error actualizando al usuario:" + JSON.stringify(err, undefined,2));}
    });
};

let eliminarUsuario = (req, res) => {
    if(!ObjectId.isValid(req.params.id))
     return res.status(400).send(`no hay registro con el id: ${req.params.id}`);

    Usuarioa.findByIdAndRemove(req.params.id, (err, docs)=>{
        if (!err) {res.send(docs);}
        else {console.log("Error eliminando el usuario:" + JSON.stringify(err, undefined,2));}
    });
};


module.exports = {
    obtenerUsuario,
    crearUsuario,
    buscarUsuario,
    actualizarUsuario,
    eliminarUsuario
}