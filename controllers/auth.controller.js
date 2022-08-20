const { response } = require("express");
const bcrypt = require('bcryptjs');
const { Usuario } = require('../models');
const { generarJWT } = require("../helpers");

const crearUsuario = async (req, res = response) => {

    const { email, password } = req.body;

    try {
        // Verificar si el emial ya esta registrado 
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
        // Generar el JWT
        const token = await generarJWT(usuario.id, usuario.name);
    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: `Por favor hable con el administrado`
        })
    }
}

const loginUsuario = async (req, res = response) => {

    const {email, password} = req.body;

    try {

        // Verificar si el emial ya esta registrado 
        const usuario = await Usuario.findOne({ email });
        
        if(!usuario){
            return res.status(400).json({
                ok:false,
                msg: `El usuario no existe con ese email`
            })
        }

        // Confirmar los password
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Password Incorrecto'
            })
        }

        // Generar JWt
        const token = await generarJWT(usuario.id, usuario.name);

        res.status(200).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: `Por favor hable con el administrador`
        })
    }
}

const revalidarToken = async (req, res = response) => {

    const {uid, name} = req;

    // Generar un nuevo JWT y retornarlo en esta petición
    const token = await generarJWT(uid, name);

    res.json({
        ok: true,
        token
    });
}



module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}