require('dotenv').config();
const express = require('express');
const app = express();


// Directorio publico
app.use(express.static('public'));

// app.get('/',  (req, res) => {
//   res.send('Hello World')
// });

app.listen(process.env.PORT, () =>{
    console.log(`Servidor Corriendo en port ${process.env.PORT}`);
});