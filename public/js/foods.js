// This function is to call the food api and get all the food that is popular

function getFoodData() {
  var request = new XMLHttpRequest();
  request.open("GET", food_url, true);

  // this function will be called when data returns from the web api
  request.onload = function () {
    // get all the food into our food array
    food_array = JSON.parse(request.responseText);

    //Fetch the reviews as well
    // fetchReview();
    console.log(food_array); // output to console

    // call the function so as to display all movies titles for "popular"
    displayFood(category);
  };

  request.send();
}

function displayFood(category) {
  var table = document.getElementById("foodTable");
  var foodCount = 0;
  var message = "";

  table.innerHTML = "";
  totalFood = food_array.length;
  if (category == "popular") {
    for (var count = 0; count < totalFood; count++) {
      if (food_array[count].popularity == category) {
        var picture = food_array[count].Picture;
        var title = food_array[count].title;
        var cell =
          '<div class="card col-md-3" ><img class="card-img-top" src="' +
          picture +
          '" alt="Card image cap">\
                            <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#reviewModal" item="' +
          count +
          '" onClick="showFoodReviews(this)"></i>\
                            <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#foodModal" class="card-title" item="' +
          count +
          '" onClick="showFoodDetails(this)">' +
          title +
          "</h5></div>\
    </div>";

        table.insertAdjacentHTML("beforeend", cell);
        foodCount++;
      }
    }
  }
  if (category == "available") {
    for (var count = 0; count < totalFood; count++) {
      if (food_array[count].availability == category) {
        var picture = food_array[count].Picture;
        var title = food_array[count].title;
        var cell =
          '<div class="card col-md-3" ><img class="card-img-top" src="' +
          picture +
          '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#reviewModal" item="' +
          count +
          '" onClick="showFoodReviews(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#foodModal" class="card-title" item="' +
          count +
          '" onClick="showFoodDetails(this)">' +
          title +
          "</h5></div>\
</div>";

        table.insertAdjacentHTML("beforeend", cell);
        foodCount++;
      }
    }
  }

  // count is the number of food
  // category is the food "popular"
  message = foodCount + "  Foods " + category;
  // update the html content of the div = summary in index.html
  document.getElementById("summary").textContent = message;
  // take out the intial message for id="parent
  document.getElementById("parent").textContent = "";
}

// this function is to display the "popular" food (located in the top-navigation)
function ListPopularFood() {
  category = "popular";
  displayFood(category);
  document.getElementById("PopularMenu").classList.add("active");
  document.getElementById("AllMenu").classList.remove("active");
  document.getElementById("aboutMenu").classList.remove("active");
}

// This function is to display the "All Menu" food
function ListAllFood() {
  category = "available";
  displayFood(category);
  document.getElementById("PopularMenu").classList.remove("active");
  document.getElementById("AllMenu").classList.add("active");
  document.getElementById("aboutMenu").classList.remove("active");
}
