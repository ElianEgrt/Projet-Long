const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

const path = require('path');
const staticPath = path.join(__dirname, '../hightech/build')


//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'hightech', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

//Configure Mongoose
try {
  mongoose.connect('mongodb://127.0.0.1/hightech', { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.set('debug', true);
} catch (error) {
  // console.error(error)
  console.error("No database detected, mongoose failed to connect.");
}


//Models & routes
require('./models/Users');
require('./config/passport');
app.use(require('./routes'));
app.use(express.static(staticPath));

console.log(staticPath)
app.get('*', (req, res) => {res.sendFile(path.join(staticPath, '/index.html'))});

//Error handlers & middlewares
if (!isProduction) app.use(errorHandler());

// Serve app
app.listen(8000, () => console.log('Server running on http://localhost:8000/'));