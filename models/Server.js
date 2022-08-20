const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            authPath: '/api/auth',
            eventsPath: '/api/events'
        }

        // Base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de nuestra aplicacion
        this.routes();
        
    }

    // Conección a nuestra base de datos
    async conectarDB(){
        await dbConnection();
    } 

    middlewares(){
        // CORS
        this.app.use(cors())

        // Directorio publico
        this.app.use(express.static('public'));

        // Lectura y parseo de body
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.authPath, require('../routes/auth.routes'));
        this.app.use(this.paths.eventsPath, require('../routes/events.routes'));
    }

    liste(){
        this.app.listen(process.env.PORT, () =>{
            console.log(`Servidor Corriendo en port ${process.env.PORT}`);
        });
    }
}

module.exports = Server;