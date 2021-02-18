const express = require('express');
var path = require('path');
const logger = require('./middlewares/logger')
const fileCheck = require('./middlewares/fileCheck')

const app = express();

// path to static files
var staticPath = path.join(__dirname, '../public');

app.use(logger);        // log requests
app.use(fileCheck)      // check files for potential build

app.use(express.static(staticPath));

// app.get('/', (req, res) => {
//   res.send('index.html');
// });

app.listen(3000, () => console.log('Serveur en écoute sur le port 3000!'));