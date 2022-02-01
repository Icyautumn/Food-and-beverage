// This function is to call the food api and get all the food that is popular

function getFoodData() {
  var request = new XMLHttpRequest();
  request.open("GET", food_url, true);

  // this function will be called when data returns from the web api
  request.onload = function () {
    // get all the food into our food array
    food_array = JSON.parse(request.responseText);

    //Fetch the reviews as well
    fetchReviews();
    console.log(food_array); // output to console

    // call the function so as to display all movies titles for "popular"
    displayFood(category);
  };

  request.send();
}

function displayFood(category) {
  var table = document.getElementById("foodTable");
  var Username = sessionStorage.getItem("username");
  var foodCount = 0;
  var message = "";

  table.innerHTML = "";
  totalFood = food_array.length;

  getFavouriteData()
  if (category == "Fast food" || category == "Japanese food" || category == "Western food" || category == "Malay food" || category == "Indian food" || category == "Fine dining" || category == "Thai food" || category == "Chinese food"){
    for (var count = 0; count < totalFood; count++) {
      if (food_array[count].TypeOfRestaurant == category) {
        var picture = food_array[count].Picture;
        var title = food_array[count].title;
        for (var counter = 0; counter < favourite_array.length; counter++){
          if (favourite_array[counter].Customer_Username == Username){
            if (favourite_array[counter].title == title){
              var cell =
            '<div class="card col-md-3" ><img class="card-img-top" src="' +
            picture +
            '" alt="Card image cap">\
                          <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#reviewModal" item="' +
            count +
            '" onClick="showFoodReviews(this)"></i>\<i class="fas fa-heart fa-lg" onClick="addToFavourites(this)" id="fav_status" style="float:left;cursor:pointer; padding-left:10px;" item ="'+ title + '"onClick="addToFavourites(this)"></i>\
                          <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#foodModal" class="card-title" item="' +
            count +
            '" onClick="showFoodDetails(this)">' +
            title +
            "</h5></div>\
  </div>";
              break;
            }
          
          }
          else{
            var cell =
          '<div class="card col-md-3" ><img class="card-img-top" src="' +
          picture +
          '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#reviewModal" item="' +
          count +
          '" onClick="showFoodReviews(this)"></i>\<i class="far fa-heart fa-lg" onClick="addToFavourites(this)" id="fav_status" style="float:left;cursor:pointer; padding-left:10px;" item ="'+ title + '"onClick="addToFavourites(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#foodModal" class="card-title" item="' +
          count +
          '" onClick="showFoodDetails(this)">' +
          title +
          "</h5></div>\
</div>";
          }
        }
        

        table.insertAdjacentHTML("beforeend", cell);
        foodCount++;
      }
      // <div class="card bg-dark text-light"><div class="card-body text-center">\
      // <div class="h1 mb-3"><img class="card-img-top" src"' + picture + '" alt="Card image cap">\
    }
  }

  if (category == "Halal") {
    for (var count = 0; count < totalFood; count++) {
      if (food_array[count].Halal == category) {
        var picture = food_array[count].Picture;
        var title = food_array[count].title;
        var cell =
        '<div class="card col-md-3" ><img class="card-img-top" src="' +
          picture +
          '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#reviewModal" item="' +
          count +
          '" onClick="showFoodReviews(this)"></i>\<i class="far fa-heart fa-lg" onClick="addToFavourites(this)" id="fav_status" style="float:left;cursor:pointer; padding-left:10px;" item ="'+ title + '"onClick="addToFavourites(this)"></i>\
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


  else {
    for (var count = 0; count < totalFood; count++) {
      lease = food_array[count].title.toLowerCase()
      if (lease.includes(category)) {
        var picture = food_array[count].Picture;
        var title = food_array[count].title;
        var cell =
        '<div class="card col-md-3" ><img class="card-img-top" src="' +
          picture +
          '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#reviewModal" item="' +
          count +
          '" onClick="showFoodReviews(this)"></i>\<i class="far fa-heart fa-lg" onClick="addToFavourites(this)" id="fav_status" style="float:left;cursor:pointer; padding-left:10px;" item ="'+ title + '"onClick="addToFavourites(this)"></i>\
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
  message = foodCount + " " + category;
  // update the html content of the div = summary in index.html
  document.getElementById("summary").textContent = "";
  // take out the intial message for id="parent
  document.getElementById("parent").textContent = "";
}

// this function is to display the "popular" food (located in the top-navigation)
function ListFastFood() {

  
  category = "Fast food";
  displayFood(category);
  
}

// This function is to display the "japanese" food


function ListJapaneseFood() {
  category = "Japanese food";
  displayFood(category);
  
}

function ListMalayFood() {
  category = "Malay food";
  displayFood(category);
  
}

function ListWesternFood() {
  category = "Western food";
  displayFood(category);
  
}

function ListIndianFood() {
  category = "Indian food";
  displayFood(category);
  
}

function ListThaiFood() {
  category = "Thai food";
  displayFood(category);
  
}

function ListFineDining() {
  category = "Fine dining";
  displayFood(category);
  
}

function ListChineseFood() {
  category = "Chinese food";
  displayFood(category);
  
}

function ListHalal() {
  category = "Halal";
  displayFood(category);
  
}

function search_restaurant(search_term){
  search_term = search_term.toLowerCase();
  displayFood(search_term);
  
}
