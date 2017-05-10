var express = require('express');
var router = express.Router();

module.exports = function () { // firebase
   router.get('/:id', function(req, res) {
       console.log("restaurant details");
      //  var id =
       console.log('restaurant #', req.params.id);
       res.render('pages/restDetail'); // normally, we ignore the extension name of example.html file
   });

   return router;
};
