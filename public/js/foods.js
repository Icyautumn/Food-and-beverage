// This function is to call the food api and get all the food that is popular

function getFoodData() {

  



  var request = new XMLHttpRequest();
  request.open("GET", food_url, true);

  // this function will be called when data returns from the web api
  request.onload = function () {
    // get all the food into our food array
    food_array = JSON.parse(request.responseText);
    console.log(food_array);
    //Fetch the reviews as well
    fetchReviews();

    // call the function so as to display all movies titles for "popular"
    displayFood(category);
  };

  request.send();



  var Customer_Username = sessionStorage.getItem("username");
    var request_fav = new XMLHttpRequest();
    request_fav.open("POST", "/favourites/user/get", true);
    request_fav.setRequestHeader("Content-Type", "application/json");

    request_fav.onload = function() {
      favourite_array = JSON.parse(request_fav.responseText);
        console.log(favourite_array);
        fetchReviews();
        
        
    };

    var payload = {Customer_Username: Customer_Username};
    request_fav.send(JSON.stringify(payload));


  
}

function displayFood(category) {
  var table = document.getElementById("foodTable");
  var Username = sessionStorage.getItem("username");
  var foodCount = 0;
  var message = "";

  table.innerHTML = " ";
  totalFood = food_array.length;

  
  
  if (category == "Fast food" || category == "Japanese food" || category == "Western food" || category == "Malay food" || category == "Indian food" || category == "Fine dining" || category == "Thai food" || category == "Chinese food" ){
    for (var count = 0; count < totalFood; count++) {
      if (food_array[count].TypeOfRestaurant == category) {
        var picture = food_array[count].Picture;
        var title = food_array[count].title;
       var rating = food_array[count].Average;
       if (rating == null){
         rating = 0;
       }
       
       if( JSON.stringify(favourite_array).indexOf(title) > -1 ) {
         console.log(title);
        var cell =
        '<div class="card col-md-3 bg-secondary text-light" ><img class="card-img-top" src="' +
        picture +
        '" alt="Card image cap">\
                      <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#reviewModal" item="' +
        count +
        '" onClick="showFoodReviews(this)"></i>\<i class="fas fa-heart fa-lg" onClick="addToFavourites(this)" id="fav_status" style="float:left;cursor:pointer; padding-left:10px;" item ="'+ title + '"onClick="addToFavourites(this)"></i>\
                      <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#foodModal" class="card-title" item="' +
        count +
        '" onClick="showFoodDetails(this)">' +
        title +
        "</h5><h6>" + rating + "star</h6></div>\
</div>";   
        table.insertAdjacentHTML("beforeend", cell);      
  }
        
          
          
        else {
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
          "</h5><h6>" + rating + "star</h6></div>\
</div>";
        table.insertAdjacentHTML("beforeend", cell);

          
            
          }
        }
        

        
        foodCount++;
      }
      // <div class="card bg-dark text-light"><div class="card-body text-center">\
      // <div class="h1 mb-3"><img class="card-img-top" src"' + picture + '" alt="Card image cap">\
    }
  

  if (category == "Halal") {
    for (var count = 0; count < totalFood; count++) {
      if (food_array[count].Halal == category) {
        var picture = food_array[count].Picture;
        var title = food_array[count].title;

        var rating = food_array[count].Average;
       if (rating == null){
         rating = 0;
       }
       if( JSON.stringify(favourite_array).indexOf(title) > -1 ) {
        console.log(title);
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
       "</h5><h6>" + rating + "star</h6></div>\
</div>";   
       table.insertAdjacentHTML("beforeend", cell);      
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
          "</h5><h6>" + rating + "star</h6></div>\
</div>";
        table.insertAdjacentHTML("beforeend", cell);
          }
        }


       
        foodCount++;
      }
    }


  else {
    for (var count = 0; count < totalFood; count++) {
      lease = food_array[count].title.toLowerCase()
      if (lease.includes(category)) {
        var picture = food_array[count].Picture;
        var title = food_array[count].title;
        var rating = food_array[count].Average;
        rating = Math.round((rating + Number.EPSILON) * 100) / 100;;
       if (rating == null){
         rating = 0;
       }


  
       console.log(favourite_array);
       if( JSON.stringify(favourite_array).indexOf(title) > -1 ) {
        console.log(title);
        var cell =
          '<div class="card col-sm-2 m-4 p-3" ><img class="card-img-top mb-3" src="' +
          picture +
          '" alt="Card image cap">\
                        <h5 style="cursor:pointer" data-toggle="modal" data-target="#foodModal" class="card-title" item="' +
          count +
          '" onClick="showFoodDetails(this)">' +
          title +
          "</h5><h6>" + rating + '<img src="images/rating/star_coloured.png" class="push-up" style="width:17px"</h6><div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer; padding-left:55px" data-toggle="modal" data-target="#reviewModal" item="' +
          count +
          '" onClick="showFoodReviews(this)"></i>\<i class="fas fa-heart fa-lg" onClick="addToFavourites(this)" id="fav_status" style="float:left;cursor:pointer; padding-left:10px;" item ="'+ title + '"onClick="addToFavourites(this)"></i></div>\
</div>\</div>';
       table.insertAdjacentHTML("beforeend", cell);      
 }
          else{
           
            var cell =
          '<div class="card col-sm-2 m-4 p-3" ><img class="card-img-top mb-3" src="' +
          picture +
          '" alt="Card image cap">\
                        <h5 style="cursor:pointer" data-toggle="modal" data-target="#foodModal" class="card-title" item="' +
          count +
          '" onClick="showFoodDetails(this)">' +
          title +
          "</h5><h6>" + rating + '<img src="images/rating/star_coloured.png" class="push-up" style="width:17px"</h6><div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer; padding-left:55px" data-toggle="modal" data-target="#reviewModal" item="' +
          count +
          '" onClick="showFoodReviews(this)"></i>\<i class="far fa-heart fa-lg" onClick="addToFavourites(this)" id="fav_status" style="float:left;cursor:pointer; padding-left:10px;" item ="'+ title + '"onClick="addToFavourites(this)"></i></div>\
</div>\</div>';



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
}


function displayFav() {
  var table = document.getElementById("foodTable");
  var Username = sessionStorage.getItem("username");
  var foodCount = 0;
  var message = "";

  table.innerHTML = " ";
  totalFood = food_array.length;

  getFavouriteData();
  
  
    for (var count = 0; count < totalFood; count++) {

        var picture = food_array[count].Picture;
        var title = food_array[count].title;
       var rating = food_array[count].Average;
       if (rating == null){
         rating = 0;
       }
       
       if( JSON.stringify(favourite_array).indexOf(title) > -1 ) {
         console.log(title);
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
        "</h5><h6>" + rating + "star</h6></div>\
</div>";   
        table.insertAdjacentHTML("beforeend", cell);      
  }

 // category is the food "popular"
 message = foodCount + " " + category;
 // update the html content of the div = summary in index.html
 document.getElementById("summary").textContent = "";
 // take out the intial message for id="parent
 document.getElementById("parent").textContent = "";
}
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


