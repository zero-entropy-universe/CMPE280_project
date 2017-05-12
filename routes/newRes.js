var express = require('express');
var router = express.Router();
module.exports = function (firebase) {
   router.get('/', function(req, res) {
       console.log("new openings");
        var list=[{name:"a",category:"hotpot",address:"1 street"},
         {name:"b",category:"dimsum",address:"2 street"},{name:"c",category:"noodle"}];
       res.render('pages/newRes',{temp:list});

        // normally, we ignore the extension name of example.html file



   });

   return router;
};