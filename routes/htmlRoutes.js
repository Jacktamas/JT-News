// const htmlController = require('../conrollers/htmlController.js');
const express = require("express");



module.exports = function(app){
  app.get('/', function(req, res){
    res.render('home', null);
  });
}
