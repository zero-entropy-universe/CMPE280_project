var express = require('express');
var router = express.Router();
module.exports = function (firebase) {



  router.get('/', function(req, res) {
    console.log("in all restaurant");
    firebase.database().ref("/restaurant/").once('value').then(function(snapshot) {
      var temp = snapshot.val();
      console.log(temp);
      var arr = [];
      Object.keys(temp).forEach(function (key, index) {
        console.log(temp[key].name);
        arr[index] = {};
        arr[index].id = key;
        arr[index].name = temp[key].name;
        arr[index].address = temp[key].address;
        arr[index].category=temp[key].category;
        arr[index].newOpen=temp[key].newOpen;
        arr[index].image=temp[key].image;
        console.log("category is :",temp[key].category);
      });
      console.log(arr);
      console.log("new openings");
      res.render('pages/newRes',{temp:arr});
    });
  });



   return router;
};