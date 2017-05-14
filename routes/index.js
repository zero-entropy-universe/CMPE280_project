var express = require('express');
var router = express.Router();

module.exports = function (firebase) {
  router.get('/', function(req, res) {
  	console.log("in index");
  	res.render('pages/index');
  });

  router.post("/search", function (req, res) {
    var searchContent = req.body.content.toLowerCase().trim();
    console.log(searchContent);
    firebase.database().ref("/restaurant/").once('value').then(function (snapshot) {
      //console.log(snapshot.val());
      var temp = snapshot.val();
      var arr = [];
      Object.keys(temp).forEach(function (key, index) {
        arr[index] = {};
        arr[index] = temp[key];
        arr[index].id = key;
      });
      console.log(arr[0]);
      var result = [];
      arr.forEach(function (element, index) {
        console.log(arr[index]);
        if (element.region.toLowerCase() == searchContent
              || element.name.toLowerCase().includes(searchContent)
              || element.category.toLowerCase().includes(searchContent)) {
          result.push(arr[index]);
        }
      });

      console.log(result);
    });
  })

  return router;
};
