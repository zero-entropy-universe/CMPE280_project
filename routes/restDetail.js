var express = require('express');
var router = express.Router();

module.exports = function (firebase) { // firebase
  router.get('/:id', function(req, res) {
    // console.log("restaurant details");
    var id = req.params.id;
    //  var id =
    // var ref = firebase.database().ref("restaurant"); // -KighKkTqQ9DhIuMGg9f
    var ref = firebase.database().ref("restaurant").child(id); // -KighKkTqQ9DhIuMGg9f //.child('-KighKkTqQ9DhIuMGg9f')
    var refComments = firebase.database().ref("comments");
    // console.log(refComments);
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
      // console.log(restaurantOption);
      // console.log(typeof restaurantOption, 'ya');
      refComments.once("value").then(function (snapshotComments) {
        restaurantComments = snapshotComments.val();
        var restaurantCommentOut = [];
        // console.log(restaurantComments);
        for (var i in restaurantComments) {
          if (id === restaurantComments[i].restaurant_id) {
            console.log(restaurantComments[i].commentList);
            // restaurantCommentOut = [];
            // for (var j in restaurantComments[i].commentList) {
              // restaurantCommentOut.push(JSON.stringify(restaurantComments[i].commentList[j]));
              // restaurantCommentOut.push(JSON.stringify(restaurantComments[i].commentList));
              // restaurantCommentOut.push((restaurantComments[i].commentList));
              restaurantCommentOut = restaurantComments[i].commentList.slice();
              // restaurantCommentOut = {};
              // console.log(restaurantCommentOut, 'commentlist');
              // restaurantCommentOut[j] = restaurantComments[i].commentList[j].slice();



          }
        }
        console.log(typeof restaurantCommentOut);
        // console.log(restaurantCommentOut);
        // for (var i=0; i<restaurantComments.length; i++) {
        // if (restaurantComments[i])
        // }
        res.render("pages/restDetail", {restaurantInfo : restaurantOption, restaurantAddress: restaurantOption.address, restaurantCommentOut: restaurantCommentOut});
      });
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
