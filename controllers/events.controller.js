const { response } = require("express");


const getEventos = (req, res = response) =>{

    res.status(200).json({
        ok: true,
        msg: `getEventos`
    })
}

const crearEvento = (req, res = response) =>{

    

    res.status(200).json({
        ok: true,
        msg: `crearEvnetos`
    })
}

const actualizarEvento = (req, res = response) =>{

    res.status(200).json({
        ok: true,
        msg: `ActualizarEvento`
    })
}

const eliminarEvento = (req, res = response) =>{

    res.status(200).json({
        ok: true,
        msg: `eliminarEvento`
    })
}


module.exports = {
    actualizarEvento,
    crearEvento,
    eliminarEvento,
    getEventos
}