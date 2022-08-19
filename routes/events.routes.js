const { Router } = require('express');
const { check } = require('express-validator');
const { getEventos, 
        crearEvento, 
        actualizarEvento, 
        eliminarEvento } = require('../controllers/events.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
        
const router = Router();

// Todas tienen que pasar por la validación del JWT
// router.use(validarJWT);

router.get(
    '/', 
    [
        validarJWT
    ],
    getEventos
);


router.post(
    '/', 
    [
        validarJWT,
        check('title','El titulo es requerido').not().isEmpty(),
        validarCampos
    ],
    crearEvento
);


router.put(
    '/:id', 
    [
        validarJWT
    ],
    actualizarEvento
);


router.delete(
    '/:id', 
    [
        validarJWT
    ],
    eliminarEvento
);


module.exports = router;
