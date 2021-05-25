const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');


const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter =require('./routes/products');
const commandRouter =require('./routes/command');
const categoryRouter =require('./routes/category');

mongoose.connect('mongodb://localhost:27017/myapp-api', 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connexion a mongodb réussie"))
.catch(()=>console.log("echec de connexion a mongodb"));

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productRouter);
app.use('/command', commandRouter); 
app.use('/category', categoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({message:'500 Server error :('});
});

module.exports = app;
