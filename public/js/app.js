var food_url="/restaurant"

var food_array = []; // this creates an empty food array


var foodCount = 0;


// popular food is being shown here
// there will be 2 tags one being popular and one being seasonal

var category = "";

var currentIndex = 0;

var review_url = "/reviews";
var review_array = [];

var starBWImage = "images/rating/star_noColour.png";
var starImage = "images/rating/star_coloured.png";
var rating = 0;

// var array = getFavouriteData();
// console.log(array);



// function getFavouriteData(){
    
//     var Customer_Username = sessionStorage.getItem("username");
//     var request_fav = new XMLHttpRequest();
//     request_fav.open("POST", "/favourites/user/get", true);
//     request_fav.setRequestHeader("Content-Type", "application/json");

//     request_fav.onload = function() {
//       var favourite_array = JSON.parse(request_fav.responseText);
//         fetchReviews();
        
        
//     };

//     var payload = {Customer_Username: Customer_Username};
//     request_fav.send(JSON.stringify(payload));
// }
// var favourite_array =  [];
