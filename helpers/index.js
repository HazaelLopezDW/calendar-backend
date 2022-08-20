const GenerarJWT = require('./generar-jwt');
const ISDate = require('./isDate');


module.exports = {
    ...GenerarJWT,
    ...ISDate
}