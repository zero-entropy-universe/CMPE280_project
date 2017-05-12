var express = require('express');
var router = express.Router();

module.exports = function (firebase) { // firebase
  router.get('/:id', function(req, res) {
    console.log("restaurant details");
    var id = req.params.id;
    //  var id =
    // var ref = firebase.database().ref("restaurant"); // -KighKkTqQ9DhIuMGg9f
    var ref = firebase.database().ref("restaurant").child('-KighKkTqQ9DhIuMGg9f'); // -KighKkTqQ9DhIuMGg9f //.child('-KighKkTqQ9DhIuMGg9f')
    var restaurantOption = {};
    ref.once("value").then(function (snapshot) {
      // console.log('typeof', typeof(snapshot));
      // console.log('typeof val', typeof(snapshot.val()));
      // console.log('snapshot: ', snapshot);
      // console.log('snapshot val: ', snapshot.val());
      // restaurantOption.push(snapshot.val());
      restaurantOption = snapshot.val();
      // snapshot.forEach(function (childSnapshot) {
      // restaurantOption.push(childSnapshot.key);
      console.log(restaurantOption);
      console.log(typeof restaurantOption, 'ya');
      res.render("pages/restDetail", {restaurantList : restaurantOption, restaurantAddress: restaurantOption.address});
    });
  });
  /*
  console.log('restaurant #', req.params.id);
  res.render('pages/restDetail'); // normally, we ignore the extension name of example.html file
  */
  //  var userId = firebase.auth().currentUser.uid;
  //  console.log(userId);
  //
  //  firebase.database().ref.on("value", function(snapshot) {
  //    console.log(snapshot.val());
  //  }, function (errorObject) {
  //    console.log("The read failed: " + errorObject.code);
  //  });
  //  router.get('/', function(req, res) {
  //    console.log("in index");
  //    res.render('pages/index');
  //  });

  return router;
};
