var express = require('express');
var router = express.Router();

module.exports = function () {
  router.get('/', function(req, res) {
  	console.log("in index");
  	res.render('pages/index');
  });

  return router;
};