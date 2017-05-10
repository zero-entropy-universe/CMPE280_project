var express = require('express');
var router = express.Router();
module.exports = function (firebase) {
   router.get('/', function(req, res) {
       console.log("new openings");
       res.render('pages/newRes'); // normally, we ignore the extension name of example.html file
   });

   return router;
};