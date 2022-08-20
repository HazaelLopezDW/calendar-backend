const { response } = require("express");
const Evento = require('../models/Evento');


const getEventos = (req, res = response) =>{

    res.status(200).json({
        ok: true,
        msg: `getEventos`
    })
}

const crearEvento = async (req, res = response) =>{

    const evento = new Evento(req.body);

    try {
        
        evento.user = req.uid;
        const eventoGuardado = await evento.save();

        res.status(200).json({
            ok: true,
            evento: eventoGuardado
        });

    } catch (error) {
       console.log(error);
       return res.status(500).json({
           ok: false,
           msg: 'Hable con el administrado...'
       });
    }
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