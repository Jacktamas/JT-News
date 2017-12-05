const htmlController = require('../controllers/htmlController.js');
const express = require("express");



module.exports = function(app){
  app.get('/', htmlController.home);

  app.get('/entertainment', htmlController.entertainment);

  app.get('/food', htmlController.food);

  app.get('/health', htmlController.health);

  app.get('/politics', htmlController.politics);

  app.get('/science', htmlController.science);

  app.get('/technology', htmlController.technology);

  app.get('/world', htmlController.world);

}
