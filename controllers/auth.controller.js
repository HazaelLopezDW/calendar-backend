const { response } = require("express")

const crearUsuario = (req, res = response) => {
    res.json({
        ok: true,
        msg: `Crear usuario`
    });
}

const loginUsuario = (req, res = response) => {
    res.json({
        ok: true,
        msg: `Login usuario`
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