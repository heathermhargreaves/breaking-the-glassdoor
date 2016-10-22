'use strict';

// CONSTANTS
const PORT = process.env.PORT || 8000;
// const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/YOUR_DB_NAME';

// PACKAGE REQUIRES
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

var massive = require('massive');
var connectionString = "postgres://heatherhargreaves@localhost/ladyproblemsdb";

// DB CONNECT
const massiveInstance = massive.connectSync({connectionString : connectionString});
app.set('db', massiveInstance);
const db = app.get('db');

// APP DECLARATION
const app = express();

// WEBPACK CONFIG
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// ROUTES
app.use('/api', require('./routes/api'));

app.get('*', (req, res) => {
  let indexPath = path.join(__dirname, '../index.html');
  res.sendFile(indexPath);
});

// SERVER LISTEN
app.listen(PORT, err => {
  if(err) throw err;

  console.log(`Server listening at http://localhost:${PORT}`);
});
