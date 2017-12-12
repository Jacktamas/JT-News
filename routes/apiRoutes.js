const apiController = require('../controllers/apiController.js');
const express = require("express");


module.exports = function(app){
  app.post('/add', apiController.add);

  app.get('/all', apiController.findAll);

  app.post('/comment', apiController.addComment)
}
