var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("in demo");
  res.render('pages/demo');
});

module.exports = router;