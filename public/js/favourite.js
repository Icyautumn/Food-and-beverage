
function getFavouriteData(){
    
    
    var request_fav = new XMLHttpRequest();
    request_fav.open("GET", "/favourites", true);
    request_fav.setRequestHeader("Content-Type", "application/json");

    request_fav.onload = function() {
        
        favourite_array = JSON.parse(request_fav.responseText);

        fetchReviews();
        console.log(favourite_array);
        
    };
    
    // console.log(Customer_Username);
    // var payload = {Customer_Username: Customer_Username};
    // console.log(payload);
    request_fav.send();
}


















function displayFavourite(category) {
    
    var table = document.getElementById("favouriteTable");
    var Customer_Username = sessionStorage.getItem("username");
    var favCount = 0;
    var message = "";

    
    console.log(favourite_array);
    table.innerHTML = "";
    totalFav = favourite_array.length;
    console.log(totalFav);
    
      for (var count = 0; count < totalFav; count++) {
        console.log("flow");
        if (favourite_array[count].Customer_Username == Customer_Username) {
          var picture = favourite_array[count].Picture;
          var title = favourite_array[count].title;
          var cell =
            '<div class="card col-md-3" ><img class="card-img-top" src="' +
            picture +
            '" alt="Card image cap">\
                          <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#reviewModal" item="' +
            count +
            '" onClick="showFoodReviews_fav(this)"></i>\<i class="far fa-heart fa-lg" onClick="addToFavourites(this)" style="float:left;cursor:pointer; padding-left:10px;" item ="'+ title + '"onClick="addToFavourites(this)"></i>\
                          <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#foodModal" class="card-title" item="' +
            count +
            '" onClick="showFoodDetails_fav(this)">' +
            title +
            "</h5></div>\
  </div>";
  
          table.insertAdjacentHTML("beforeend", cell);
          favCount++;
        }
        // <div class="card bg-dark text-light"><div class="card-body text-center">\
        // <div class="h1 mb-3"><img class="card-img-top" src"' + picture + '" alt="Card image cap">\
      }

    document.getElementById("summaryfav").textContent = "";
    // take out the intial message for id="parent
    document.getElementById("child").textContent = "";
}


function ListFavourite(){
    category = sessionStorage.getItem("username");
    console.log(category);
    displayFavourite(category);
}

function showFoodDetails_fav(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("foodTitle").textContent = favourite_array[item].title;
    document.getElementById("restaurant_picture").src = favourite_array[item].Picture;
    // document.getElementById("TypeOfRestaurant").textContent = food_array[item].TypeOfRestaurant;
    document.getElementById("telephone_number").textContent = favourite_array[item].telephone_number;
    document.getElementById("Monday_hours").textContent = favourite_array[item].Monday;
    document.getElementById("Tuesday_hours").textContent = favourite_array[item].Tuesday;
    document.getElementById("Wednesday_hours").textContent = favourite_array[item].Wednesday;
    document.getElementById("Thursday_hours").textContent = favourite_array[item].Thursday;
    document.getElementById("Friday_hours").textContent = favourite_array[item].Friday;
    document.getElementById("Saturday_hours").textContent = favourite_array[item].Saturday;
    document.getElementById("Sunday_hours").textContent = favourite_array[item].Sunday;
    document.getElementById("Address").textContent = favourite_array[item].address;
  
  
  
  
    let map;
  
   
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: favourite_array[item].latitude, lng: favourite_array[item].Longitude },
        zoom: 20,
      });
      
      var infowindow = new google.maps.InfoWindow({
        content: favourite_array[item].address
      });
      var marker = new google.maps.Marker({
        position:  { lat: favourite_array[item].latitude, lng: favourite_array[item].Longitude },
        map: map
      });
      infowindow.open(map, marker);
  
  
    
  }


  function showFoodReviews_fav(element) {
    username = sessionStorage.getItem("username")
    document.getElementById("emptyReview").innerHTML =
      "No Review Yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
  
    document.getElementById("review").textContent =
      "Review for " + favourite_array[item].title;
    document.getElementById("reviewBody").textContent = "";
  
    for (var i = 0; i < review_array.length; i++) {
      if (review_array[i].RestaurantID === favourite_array[item].Food_id) {
        document.getElementById("emptyReview").innerHTML = "";
        selectedFoodID = favourite_array[item].RestaurantID;
        star = "";
        var html =
          '<div class="text-center" style="width:100%;">                                                           \
              <div class="card">                                                                                  \
                  <div class="card-body">                                                                         \
                      <p class="card-text" id="rating' +
          i +
          '">' +
          review_array[i].Review +
          "</p>               \
                      <small>by " +
          review_array[i].Customer_username +
          " @ " +
          review_array[i].Post_Date +
          "</small>   \
                  </div>                                                                                          \
              </div>                                                                                              \
          </div>";
  
        document
          .getElementById("reviewBody")
          .insertAdjacentHTML("beforeend", html);
  
        var star = "";
        for (var j = 0; j < review_array[i].Rating; j++) {
          console.log(i);
          star +=
            "<img src='images/rating/star_coloured.png' style='width:50px'/>";
        }
        if (username == review_array[i].Customer_username){
          star +=
          "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" +
          i +
          "' onClick='deleteReview(this)' ></i>";
        star +=
          "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editReviewModal' data-dismiss='modal' item='" +
          i +
          "' onClick='editReview(this)' ></i>";
        }
        
        document
          .getElementById("rating" + i)
          .insertAdjacentHTML("beforebegin", star + "<br/>");
      }
    }
  
    
  }

  