const ValidarCampos = require('./validar-campos');
const ValidarJWT = require('./validar-jwt');

module.exports = {
    ...ValidarCampos,
    ...ValidarJWT
}