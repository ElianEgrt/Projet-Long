const express = require('express');
var path = require('path');

const logger = require('./middlewares/logger')
const serveHome = require('./middlewares/serveHome')
var compression = require('compression')

const buildPublic = require('../src/build')

const app = express();

// path to static files
var staticPath = path.join(__dirname, '../public');

app.use(logger);        // log requests
app.use(compression())  // compress all responses

app.get('/', serveHome);

app.use(express.static(staticPath));

app.listen(3000, () => console.log('Serveur en écoute sur le port 3000!'));