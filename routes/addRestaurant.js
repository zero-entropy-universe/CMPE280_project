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

  var tuesday = {
  	open : data.tuesday_open,
  	close : data.tuesday_close
  };

  var wednesday = {
  	open : data.wednesday_open,
  	close : data.wednesday_close
  };

  var thursday = {
  	open : data.thursday_open,
  	close : data.thursday_close
  };

  var friday = {
  	open : data.friday_open,
  	close : data.friday_close
  };

  var saturday = {
  	open : data.saturday_open,
  	close : data.saturday_close
  };

  var sunday = {
  	open : data.sunday_open,
  	close : data.sunday_close
  };

  console.log(monday);

  newRestaurantRef.set({
  	name : data.name,
  	category : tempCategory,
  	phone: data.phone,
  	address: data.address,
  	description: data.description,
  	openHours: {
  		Monday: monday,
  		Tuesday: tuesday,
  		Wednesday: wednesday,
  		Thursday: thursday,
  		Friday: friday,
  		Saturday: saturday,
  		Sunday: sunday
  	}
  });

}