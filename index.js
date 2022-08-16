const express = require('express')
const app = express()

app.get('/',  (req, res) => {
  res.send('Hello World')
})

app.listen(process.env.PORT, () =>{
    console.log(`Servidor Corriendo en port ${process.env.PORT}`);
});