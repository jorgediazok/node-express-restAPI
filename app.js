const express = require('express');

const app = express();

//Crear rutas
app.get('/', (req, res) => {
  res.send('We are at home');
});

//Escuchar el servidor
app.listen(3000);
