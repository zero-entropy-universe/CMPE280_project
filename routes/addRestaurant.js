var express = require('express');
var router = express.Router();

module.exports = function (firebase) {
  router.get('/', function(req, res) {
  	var ref = firebase.database().ref("category/");
  	var categoryOption = [];
  	ref.once("value").then(function (snapshot) {
      console.log(snapshot.val());
  		Object.keys(snapshot.val()).forEach(function (key, index) {
  			categoryOption.push(snapshot.val()[key].name);
  		});
  		console.log(categoryOption);
      var regionOption = [
        "Sichuan",
        "Anhui",
        "Hunan"
      ];
  		res.render("pages/addRestaurant", {categoryList : categoryOption, regionList: regionOption});
  	});
  });

  router.post('/', function (req, res) {
  	var data = req.body;
  	createRestaurant(firebase, data);
    return res.json({
      done: true,
      message: "restaurant inserted"
    });
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

  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getUTCMonth() + 1;
  var day = currentDate.getUTCDate() - 1;
  var date = month + "/" + day + "/" + year;
  console.log(year + "," + month +  "," + day);

  newRestaurantRef.set({
  	name : data.name,
  	category : data.category,
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
  	},
    photos: [],
    openningDate: date,
    region: data.region
  });

}
