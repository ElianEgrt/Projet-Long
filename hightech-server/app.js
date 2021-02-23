const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

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
mongoose.connect('mongodb://localhost/hightech', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('debug', true);

//Models & routes
require('./models/Users');
require('./config/passport');
app.use(require('./routes'));

//Error handlers & middlewares
if (!isProduction) app.use(errorHandler());

// Serve app
app.listen(8000, () => console.log('Server running on http://localhost:8000/'));