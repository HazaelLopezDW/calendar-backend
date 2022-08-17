const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) => {

    return new Promise((resolve, reject) =>{

        const payload = {uid, name};
        jwt.sign(payload, process.env.SECRETE_JWT_SEED, {
            expiresIn: '100h'
        },(err, token) => {
            if(err){
                console.log(err);
                reject('No se puedo generar el Token')
            }
            resolve(token)
        });
    });
}

module.exports = {
    generarJWT
}