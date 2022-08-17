const { response } = require("express");
const Usuario = require('../models/usuario');

const crearUsuario = async (req, res = response) => {

    const {name, email, password} = req.body;

    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
    
        res.status(201).json({
            ok: true,
            msg: `Crear usuario`,
            name, 
            email, 
            password
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: `Por favor hable con el administrado`
        })
    }
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