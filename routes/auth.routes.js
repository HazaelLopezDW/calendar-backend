const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, 
        loginUsuario, 
        revalidarToken } = require('../controllers/auth.controller');

const router = Router();

router.post(
    '/',
    [
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de tener 6 caracteres').isLength({ min: 6})
    ],
    loginUsuario
);

router.post(
    '/new',
    [
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de tener 6 caracteres').isLength({ min: 6})
    ],
    crearUsuario
);

router.get('/renew', revalidarToken);


module.exports = router;