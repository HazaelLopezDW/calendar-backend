require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors())

// Directorio publico
app.use(express.static('public'));

// Lectura y parseo de body
app.use(express.json());

// Rutas:
// TODO: auth // Craer, login renew
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/events', require('./routes/events.routes'));


// TODO: CRUD: Eventos

app.listen(process.env.PORT, () =>{
    console.log(`Servidor Corriendo en port ${process.env.PORT}`);
});