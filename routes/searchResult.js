var express = require('express');
var router = express.Router();

module.exports = function (firebase) {
  // router.get('/', function(req, res) {
  //   console.log("in all restaurant");
  //   firebase.database().ref("/restaurant/").once('value').then(function(snapshot) {
  //     var temp = snapshot.val();
  //     console.log(temp);
  //     var arr = [];
  //     Object.keys(temp).forEach(function (key, index) {
  //       console.log(temp[key].name);
  //       arr[index] = {};
  //       arr[index]=temp[key];
  //       arr[index].id = key;
  //       console.log("category is :",temp[key].category);
  //     });
  //     console.log(arr);
  //     console.log("search result page");
  //     res.render('pages/searchResult',{searchResult:arr});
  //   });
  // });

  router.get("/:content", function (req, res) {
    console.log("in content");
    var searchContent = req.params.content.toLowerCase().trim();
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
      // console.log(arr[0]);
      var result = [];
      arr.forEach(function (element, index) {
        // console.log(arr[index]);
        if (element.region.toLowerCase() == searchContent
              || element.name.toLowerCase().includes(searchContent)
              || element.category.toLowerCase().includes(searchContent)) {
          result.push(arr[index]);
        }
      });

      console.log(result);
      // res.json({
      //   done: true,
      //   searchResult : result
      // })
      res.render("pages/searchResult",{searchResult:result});
    });
  })

   return router;
};
