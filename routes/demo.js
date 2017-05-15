var express = require('express');
var router = express.Router();

module.exports = function (firebase) {
  router.get('/', function(req, res) {
  	res.render("pages/demo");
  });

  /**
   * for add comments for certain restaurant
   */
  router.get("/comments", function (req, res) {
    var commentsRef = firebase.database().ref("comments/");
    var newCommentRef = commentsRef.push();
    var temp = {};
    temp["some_rest_id"] = true;
    var tempUser1 = {};
    tempUser1["user_id_1"] = true;
    var tempUser2 = {};
    tempUser2["user_id_2"] = true;
    newCommentRef.set({
      restaurant_id : "some_rest_id",
      commentList : [
        {
          content: "hello world",
          rating: 4,
          userId: "user_id_1"
        },
        {
          content: "hello2 world2",
          rating: 5,
          userId: "user_id_2"
        }
      ]
    })
    .then(function() {
      return res.json({done: true});
    })
    .catch(function(error) {
      console.log('insert comment failed');
      return res.json({done: false});
    });
  });

  router.get("/allComments", function (req, res) {
    console.log("in all comments")
    firebase.database().ref("/comments/").once('value').then(function(snapshot) {
      var temp = snapshot.val();
      console.log(Object.keys(temp));
      var arr = [];
      Object.keys(temp).forEach(function (key, index) {
         console.log(temp[key].commentList);
        arr[index] = {};
        arr[index].id = key;
        arr[index].name = temp[key].name;
        arr[index].address = temp[key].address;
        console.log("category is :",temp[key].category);
      });
      console.log(arr);
    });
  });

  router.get("/comments/:id", function (req, res) {
    var url = "/comments/" + req.params.id;
    // firebase.database().ref(url).once('value').then(function(snapshot) {
    //   console.log(snapshot.val().commentList);
    // });
  });



  router.post("/addComments", function (req, res) {
    console.log("in add comment")
    var comment = req.body.comment;
    var id = "-Kk36PSAu5YCVaDIHaXP";
    var url = "/comments/" + id + "/commentList/"
    var length = 3;
    var ref = firebase.database().ref(url);
    var newCommentRef = ref.push();
    newCommentRef.set({
      content: comment,
      rating: 1,
      userId: "hello"
    });
  });

  return router;
};
