// using the express framework
var express = require("express"); 

// set foodController to the foodController class
var foodController = require("./controllers/foodController");
var reviewController = require('./controllers/reviewController');
var userController = require('./controllers/userController');
var favouriteController = require('./controllers/favouriteController');


// set variable app to be an instance of express framework. from now on, app is the express
var app = express(); 

// static files to be served from the public folder - for eg. html, images
app.use(express.static("./public"));
// json() is a method inbuilt in express to recognize the incoming request object 
app.use(express.json());

// activate the getAllRestaurants if the route is GET(method) /food
app.route('/restaurant').get(foodController.getAllRestaurants); 

app.route('/restaurant/specifics').get(foodController.GetTypeOfRestaurants)

// activate the getAllReviews method if the route is GET(method) /reviews
app.route('/reviews').get(reviewController.getAllReviews);

// activate the addReview method if the method is POST(method) /reviews
app.route('/reviews').post(reviewController.addReview);

// activate the updateReview if the method is PUT(method)/ reviews
app.route('/reviews/:id').put(reviewController.updateReview);

// activate the delete review method if the route is DELETE(method) /comments
app.route('/reviews/:id').delete(reviewController.deleteReview);

// user database postman 
app.route('/users').get(userController.getAllUser);
app.route('/users').post(userController.addUser);
app.route('/users').put(userController.updateUser);
app.route('/users/:id').delete(userController.deleteUser);
app.route('/login').post(userController.loginUser);

// favourite database 
app.route('/favourites').get(favouriteController.getAllFavourites);
app.route('/favourites/:id').get(favouriteController.getSpecificFavourite);
app.route('/favourites').post(favouriteController.addFavourite);
app.route('/favourite/:id').delete(favouriteController.deleteFavourite);



// start the nodejs to be listening for the incoming request @ port 8080
app.listen(8080, "127.0.0.1");

// output to console
console.log("web server running @ http://127.0.0.1:8080");