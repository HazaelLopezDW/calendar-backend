const { Router } = require('express');
const { check } = require('express-validator');
const { getEventos, 
        crearEvento, 
        actualizarEvento, 
        eliminarEvento } = require('../controllers/events.controller');
const { isDate } = require('../helpers/isDate');
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
        check('start','Fecha de inicio es obligatoria').custom(isDate),
        check('end','Fecha de finalización es obligatoria').custom(isDate),
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
