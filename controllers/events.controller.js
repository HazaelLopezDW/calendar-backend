const { response } = require("express");
const Evento = require('../models/Evento');


const getEventos = async (req, res = response) =>{

    const eventos = await Evento.find()
                                .populate('user', 'name');

    res.status(200).json({
        ok: true,
        eventos
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

const actualizarEvento = async (req, res = response) =>{

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById(eventoId);

        if(!evento){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evneto'
            })
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento,{
            new: true
        })

        res.status(200).json({
            ok: true,
            evento: eventoActualizado
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }  
}

const eliminarEvento = async (req, res = response) =>{

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById(eventoId);

        if(!evento){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de eliminar este evneto'
            })
        }

        await Evento.findByIdAndDelete(eventoId, { new: true });

        res.status(200).json({ ok: true });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    } 
}


module.exports = {
    actualizarEvento,
    crearEvento,
    eliminarEvento,
    getEventos
}