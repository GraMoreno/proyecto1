//importamos los modelos de moongose para acceder a sus métodos

const usuarioCtrl= {};

usuarioCtrl.getUsuario = async (req, res)=>{
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

usuarioCtrl.crearUsuario = (req, res)=>{
    usuario.create(req.body)
    .then((usuarioCreado)=>{
        return res.send({mensaje: "usuario creado", detalles:usuarioCreado})
    })
    .catch ((errorCreando)=>{
        return res.send({ mensaje: "no se pudo crear el usuario", error:errorCreando})
    })
};

module.exports = usuarioCtrl;