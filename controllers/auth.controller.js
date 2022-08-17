const { response } = require("express");
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');

const crearUsuario = async (req, res = response) => {

    const { email, password } = req.body;

    // Verificar si el emial ya esta registrado 

    try {

        let usuario = await Usuario.findOne({ email });
        
        if(usuario){
            return res.status(400).json({
                ok:false,
                msg: `Ùn usario exite con ese correo`
            })
        }

        usuario = new Usuario(req.body);

        // Encriptar la contraseña
        const salt = bcrypt.genSaltSync(11);
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();
    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
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