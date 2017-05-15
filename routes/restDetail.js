var express = require('express');
var router = express.Router();

module.exports = function (firebase) { // firebase

  router.get('/:id', function(req, res) {
    // console.log("restaurant details");
    var restaurant_id = req.params.id;

    var restaurantRef = firebase.database().ref("/restaurant/" + restaurant_id);
    var commentRef = firebase.database().ref('/comments/');
    // format query using restaurant_id
    commentRef.orderByChild("restaurant_id").equalTo(restaurant_id).once("value").then(function (snapshot) {
      var commentId = (Object.keys(snapshot.val()))[0];
      var commentObject = snapshot.val();
      var commentList = snapshot.val()[commentId].commentList;
      var arr = [];
      Object.keys(commentList).forEach(function (key, index) {
        arr.push(commentList[key]);
      });


      // get restaurant information
      restaurantRef.once("value").then(function (resSnapshot) {
        console.log(resSnapshot.val());
        var restaurantInfo = {
          id: restaurant_id,
          address: resSnapshot.val().address,
          category: resSnapshot.val().category,
          description: resSnapshot.val().description,
          image: resSnapshot.val().image,
          name: resSnapshot.val().name,
          newOpen: resSnapshot.val().newOpen,
          openHours: // fake data
           { Friday: { close: '10:30 PM', open: '11:00 AM' },
             Monday: { close: 'close', open: 'close' },
             Saturday: { close: '10:30 PM', open: '11:00 AM' },
             Sunday: { close: '10:30 AM', open: '11:00 AM' },
             Thursday: { close: '10:30 PM', open: '11:00 AM' },
             Tuesday: { close: '10:30 PM', open: '11:00 AM' },
             Wednesday: { close: '10:30 PM', open: '11:00 AM' } },
          phone: resSnapshot.val().phone,
          region: resSnapshot.val().region
        };
        restaurantInfo.id = resSnapshot.val();
        res.render("pages/restDetail", {restaurantInfo: restaurantInfo, commentList: arr, commentId: commentId});
      })
    });
  });

    //  var id =
    // var ref = firebase.database().ref("restaurant"); // -KighKkTqQ9DhIuMGg9f
    /*var ref = firebase.database().ref("restaurant").child(id);*/ // -KighKkTqQ9DhIuMGg9f //.child('-KighKkTqQ9DhIuMGg9f')
    /*var refComments = firebase.database().ref("comments");*/
    // console.log(refComments);
    /*var restaurantOption = {};
    ref.once("value").then(function (snapshot) {*/
      // console.log('typeof', typeof(snapshot));
      // console.log('typeof val', typeof(snapshot.val()));
      // console.log('snapshot: ', snapshot.val());
      // console.log('snapshot val: ', snapshot.val());
      // restaurantOption.push(snapshot.val());
      /*restaurantOption = snapshot.val();*/
      // snapshot.forEach(function (childSnapshot) {
      // restaurantOption.push(childSnapshot.key);
      // console.log(restaurantOption);
      // console.log(typeof restaurantOption, 'ya');
      /*refComments.once("value").then(function (snapshotComments) {
        restaurantComments = snapshotComments.val();
        console.log(Object.keys(rest));
        var restaurantCommentOut = [];*/
        // console.log(restaurantComments);
        /*for (var i in restaurantComments) {
          if (id === restaurantComments[i].restaurant_id) {*/
            // console.log(restaurantComments[i].commentList);
            // restaurantCommentOut = [];
            /*for (var j in restaurantComments[i].commentList) {*/
              // restaurantCommentOut.push(JSON.stringify(restaurantComments[i].commentList[j]));
              // restaurantCommentOut.push(JSON.stringify(restaurantComments[i].commentList));
              // restaurantCommentOut.push((restaurantComments[i].commentList));
              /*restaurantCommentOut.push(restaurantComments[i].commentList[j]);*/
              // restaurantCommentOut = {};
              // console.log(restaurantCommentOut, 'commentlist');
              // restaurantCommentOut[j] = restaurantComments[i].commentList[j].slice();
/*            }
          }
        }*/
        // console.log(typeof restaurantCommentOut);
        /*console.log(restaurantCommentOut[0]);*/
        // for (var i=0; i<restaurantComments.length; i++) {
        // if (restaurantComments[i])
        // }
        //res.render("pages/restDetail", {restaurantInfo : restaurantOption, restaurantAddress: restaurantOption.address, restaurantCommentOut: restaurantCommentOut});



  router.post("/addComment", function (req, res) {
    console.log("in add comment")
    var commentId = req.body.commentId;
    var url = "/comments/" + commentId + "/commentList/"
    var ref = firebase.database().ref(url);
    var newCommentRef = ref.push();
    var response = newCommentRef.set({
      content: req.body.content,
      rating: req.body.rating,
      userId: "hello"
    });
    console.log(response);
  });



  return router;
};
