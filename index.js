require('dotenv').config();
const express = require('express');
const app = express();


// Directorio publico
app.use(express.static('public'));

// Rutas:
// TODO: auth // Craer, login renew
app.use('/api/auth', require('./routes/auth.routes'));


// TODO: CRUD: Eventos

app.listen(process.env.PORT, () =>{
    console.log(`Servidor Corriendo en port ${process.env.PORT}`);
});