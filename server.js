'use strict'
var express = require('express');
var path = require('path');
var app = express();
var ejs = require('ejs');

/*
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/Mern';

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('Button');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}, {Button: [{Button1:"Name1"}]}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(4, result.result.n);
    assert.equal(4, result.ops.length);
    console.log("Inserted 4 documents into the collection");
    callback(result);
  });
}

var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('Button');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocuments(db, function() {
    findDocuments(db, function() {
      db.close();
    });
  });
});
*/

app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
app.use('/static/scripts', express.static('dist'));
app.get('/',function(req,res){
  return res.render(__dirname + '/index.html');
});
app.get('/buttons',function(req,res){
  return //make return all buttons from database
});

app.listen(4000);
