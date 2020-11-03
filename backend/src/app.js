const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

const app = express();

// connection to db
mongoose.connect('mongodb://localhost:27017/prjweb')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./router/index');
const userRoutes = require('./router/user');
const userContent = require('./router/content');

// settings
app.set('port', process.env.PORT || 5000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);
app.use(cookieParser());

// routes
app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/content', userContent);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

