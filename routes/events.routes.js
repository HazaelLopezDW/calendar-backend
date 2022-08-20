const { Router } = require('express');
const { check } = require('express-validator');
const { getEventos, 
        crearEvento, 
        actualizarEvento, 
        eliminarEvento } = require('../controllers');
const { isDate } = require('../helpers');
const { validarCampos,
        validarJWT } = require('../middlewares'); 
        
const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use(validarJWT);

router.get(
    '/', 
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
        check('id').isMongoId()
    ],
    actualizarEvento
);


router.delete(
    '/:id', 
    eliminarEvento
);


module.exports = router;
