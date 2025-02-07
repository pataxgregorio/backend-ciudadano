require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const routes = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/', routes);

const port = 3001;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
