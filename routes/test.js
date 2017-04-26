var express = require('express');
var router = express.Router();

module.exports = function (firebase) {
  router.get('/', function(req, res) {

    createCategory(firebase, "Hunan", "Hunan Cuisine", "Spicy Hot");

  });

    return router;
};

function createCategory(firebase, key, name, characteristic) {
  var categoryRef = firebase.database().ref("category/");
  var cantoneseRef = categoryRef.child(key);
  cantoneseRef.set({
    name: name,
    characteristic: characteristic
  });
}

function createRestaurant(firebase, name, address, category, phone, hours) {
  var restaurantRef = firebase.database().ref("restaurant/");
  var newRestaurantRef = restaurantRef.push();

  var tempCategory = {};
  tempCategory[category] = true;

  console.log(tempCategory);
  console.log(newRestaurantRef.key);
  newRestaurantRef.set({
    name: name,
    address: address,
    category: tempCategory,
    phone: phone,
    hours: hours
  });
}
