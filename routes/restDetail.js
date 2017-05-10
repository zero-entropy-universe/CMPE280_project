var express = require('express');
var router = express.Router();

module.exports = function () { // firebase
   router.get('/', function(req, res) {
       console.log("restaurant details");
       res.render('pages/restDetail'); // normally, we ignore the extension name of example.html file
   });

   return router;
};
