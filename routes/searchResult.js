var express = require('express');
var router = express.Router();

module.exports = function () {
   router.get('/', function(req, res) {
       console.log("search result page");
        var list=[{name: "Chili Boy",category: "hotPot",region: "Sichuan",address:"S 11th Ave, San Jose"},
        {name: "Boiling Point",category: "hotPot",region: "Fujian",address:"20956 Homestead Rd, Cupertino"}]
       res.render('pages/searchResult',{temp:list}); // normally, we ignore the extension name of example.html file
   });

   return router;
};
