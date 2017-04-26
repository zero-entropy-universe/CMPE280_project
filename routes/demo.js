var express = require('express');
var router = express.Router();

module.exports = function () {
  router.get('/', function(req, res) {
  	res.render("pages/demo");
  });

  router.get("/test", function (req, res) {
  	
  });

  router.post("/", function (req, res) {
  	
  });

  return router;
};