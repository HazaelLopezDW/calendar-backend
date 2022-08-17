const { response } = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res = response) => {

    const {name, email, password} = req.body;

    // Manejo de errores
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    if(name.length < 5){
        return res.status(400).json({
            ok: false,
            msg: `El nombre debe ser de 6 letras`
        })
    }

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

     // Manejo de errores
     const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json({
             ok: false,
             errors: errors.mapped()
         });
     }

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