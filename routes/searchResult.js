var express = require('express');
var router = express.Router();

module.exports = function () {
   router.get('/', function(req, res) {
       console.log("search result page");
        var list=[{},{}]
       res.render('pages/searchResult'); // normally, we ignore the extension name of example.html file
   });

   return router;
};
