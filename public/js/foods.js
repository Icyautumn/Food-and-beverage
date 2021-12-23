// This function is to call the food api and get all the food that is popular

function getFoodData() {
    var request = new XMLHttpRequest();
    request.open('GET', food_url, true);

    // this function will be called when data returns from the web api
    request.onload = function() {
        // get all the food into our food array
        food_array = JSON.parse(request.responseText);

        //Fetch the reviews as well
        // fetchReview();
        console.log(food_array) // output to console

        // call the function so as to display all movies titles for "popular"
        displayFood(category);
    };

    request.send();
}