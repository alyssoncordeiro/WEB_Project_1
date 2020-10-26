const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

const app = express();

// connection to db
mongoose.connect('mongodb://localhost:27017/prjweb')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./router/index');
const userRoutes = require('./router/user');

// settings
app.set('port', process.env.PORT || 5000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use(express.json());

// routes
app.use('/', indexRoutes);
app.use('/user', userRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

