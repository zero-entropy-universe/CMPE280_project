var express = require("express");
var router = express.Router();

module.exports = function () {

	router.get("/login", function (req, res) {
		console.log("in login");
		res.render("pages/login");
	})



	return router;
}