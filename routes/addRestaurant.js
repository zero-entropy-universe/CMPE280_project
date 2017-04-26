var express = require('express');
var router = express.Router();

module.exports = function (firebase) {
  router.get('/', function(req, res) { 	
  	var ref = firebase.database().ref("category/");
  	var categoryOption = [];
  	ref.once("value").then(function (snapshot) {
  		snapshot.forEach(function (childSnapshot) {
  			categoryOption.push(childSnapshot.key);
  		});
  		console.log(categoryOption);
  		res.render("pages/addRestaurant", {categoryList : categoryOption});
  	});
  });

  router.post('/', function (req, res) {
  	var data = req.body;
  	createRestaurant(firebase, data);
  });

  return router;
};

function createRestaurant(firebase, data) {
  var restaurantRef = firebase.database().ref("restaurant/");
  var newRestaurantRef = restaurantRef.push();
  console.log("in firebase", data);

  var tempCategory = {};
  tempCategory[data.category] = true;

  console.log(data.monday_open);
  console.log(newRestaurantRef.key);

  var monday = {
  	open : data.monday_open,
  	close : data.monday_close
  };

  console.log(monday);

  newRestaurantRef.set({
  	name : data.name,
  	category : tempCategory,
  	phone: data.phone,
  	address: data.address,
  	description: data.description,
  	openHours: {
  		Monday: monday
/*  		Tuesday: {data.Tuesday[0] : true, data.Tuesday[1] : true},
  		Wednesday: {data.Wednesday[0] : true, data.Wednesday[1] : true},
  		Thursday: {data.Thursday[0] : true, data.Thursday[1] : true},
  		Friday: {data.Friday[0] : true, data.Friday[1] : true},
  		Saturday: {data.Saturday[0] : true, data.Saturday[1] : true},*/
  	}
  });

}