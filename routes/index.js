var express = require('express');
var router = express.Router();

var mongoose = require('../models/models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
  	monstruo: 'hola'
  });
});

module.exports = router;
