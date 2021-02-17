const express = require('express');
const {msToTime, fileAge} = require('./src/utils')
var path = require('path');

const app = express();

// path to static files
var staticPath = path.join(__dirname, '/public');

// Log requests and responses in console
let logger = (req, res, next) => {
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;
  let log = `[${formatted_date}] ${method}:${url} ${status}`;
  console.log(log);
  next();
};

// Check file age
let fileCheck = (req, res, next) => {
  if (req.method === 'GET' && req.url.slice(-4) !== '.css') {
    // locate file
    let file = req.url === '/' ? '/index.html' : req.url;
    let filePath = path.join(staticPath, file)
    
    // Compute age
    let age = fileAge(filePath)

    if (age !== undefined) {
      // Log readable age
      console.log(`${file} age is ${msToTime(age)}`);
      if (age > 5 * 60 * 1000) {
        console.log(`${file} is too old, rebuilding it.`);
        require("./src/index")
      }
    } else {
      console.log("File doesn't exist, you need to build it or 404")
    }
    
  }
  next();
};

app.use(logger);

app.use(fileCheck)

app.use(express.static(staticPath));

// app.get('/', (req, res) => {
//   res.send('index.html');
// });

app.listen(3000, () => console.log('Serveur en écoute sur le port 3000!'));