// using the express framework
var express = require("express"); 

// set foodController to the foodController class
var foodController = require("./controllers/foodController");
var reviewController = require('./controllers/reviewController');

// set variable app to be an instance of express framework. from now on, app is the express
var app = express(); 

// static files to be served from the public folder - for eg. html, images
app.use(express.static("./public"));
// json() is a method inbuilt in express to recognize the incoming request object 
app.use(express.json());

// activate the getAllFood if the route is GET(method)
app.route('/food').get(foodController.getAllFood); 

// activate the getAllReviews method if the route is GET(method) /comments
app.route('/reviews').get(reviewController.getAllReviews);

// activate the addReview method if the method is POST(method) /comments
app.route('/reviews').post(reviewController.addReview);

// start the nodejs to be listening for the incoming request @ port 8080
app.listen(8080, "127.0.0.1");

// output to console
console.log("web server running @ http://127.0.0.1:8080");