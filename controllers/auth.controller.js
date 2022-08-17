const { response } = require("express");

const crearUsuario = (req, res = response) => {

    const {name, email, password} = req.body;

    res.status(201).json({
        ok: true,
        msg: `Crear usuario`,
        name, 
        email, 
        password
    });
}

const loginUsuario = (req, res = response) => {

    const {email, password} = req.body;

    res.status(200).json({
        ok: true,
        msg: `Login usuario`,
        email, 
        password
    });
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: `revalidar Token`
    });
}



module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}