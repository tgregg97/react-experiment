'use strict'
var express = require('express');
var path = require('path');
var app = express();
var ejs = require('ejs');

app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
app.use('/static/scripts', express.static('dist'));
app.get('/',function(req,res){
  return res.render(__dirname + '/index.html');
});

app.listen(3000);
