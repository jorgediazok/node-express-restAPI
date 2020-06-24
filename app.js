const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Importar rutas
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
app.use('/posts', postsRoute);
app.use('/users', usersRoute);

//Crear rutas
app.get('/', (req, res) => {
  res.send('We are at home');
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('conected to DB');
  }
);

//Escuchar el servidor
app.listen(3000);
