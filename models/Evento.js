const { Schema, model } = require('mongoose');

const EventoSchema = Schema({
    title: {
        type: String,
        required: [true, 'El titulo es requerido']
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        required: [true, 'La fecha de inicio es requerida']
    },
    end: {
        type: Date,
        required: [true, 'La fecha de fin es requerida']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

module.exports = model('Evento', EventoSchema);