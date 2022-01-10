// this function is to display all the reviews of the food
// whenever the user click on the "comment button"

function showFoodReviews(element) {
  document.getElementById("emptyReview").innerHTML =
    "No Review Yet. Create one now";
  var item = element.getAttribute("item");
  currentIndex = item;

  document.getElementById("review").textContent =
    "Review for " + food_array[item].title;
  document.getElementById("reviewBody").textContent = "";

  for (var i = 0; i < review_array.length; i++) {
    if (review_array[i].RestaurantID === food_array[item].Food_id) {
      document.getElementById("emptyReview").innerHTML = "";
      selectedFoodID = food_array[item].RestaurantID;
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

      star +=
        "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" +
        i +
        "' onClick='deleteReview(this)' ></i>";
      star +=
        "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editReviewModal' data-dismiss='modal' item='" +
        i +
        "' onClick='editReview(this)' ></i>";
      document
        .getElementById("rating" + i)
        .insertAdjacentHTML("beforebegin", star + "<br/>");
    }
  }
}

function fetchReviews() {
  var request = new XMLHttpRequest();

  request.open('GET', review_url, true);

  // This command starts the calling of the reviews api
  request.onload = function () {
    //get all the reviews records into our review array
    review_array = JSON.parse(request.responseText);
    console.log(review_array);
  };
  request.send();
}

function showFoodDetails(element) {
  var item = element.getAttribute("item");
  currentIndex = item;
  document.getElementById("foodTitle").textContent = food_array[item].title;
}

function newReview() {
  // initialize each HTML input elements in the modal window with default value
  rating = 0;
  document.getElementById("userReviews").value = "";
  document.getElementById("nickname").value = "";
}

// submit or send the new comment to the server to be added.
function addReview() {
  var reviews = new Object();
  // food ID is require by server to create new comment
  reviews.RestaurantID = food_array[currentIndex].RestaurantID;
  // food title is required by server to create new review
  reviews.title = food_array[currentIndex].title;
  reviews.Customer_username = document.getElementById("nickname").value;
  reviews.Review = document.getElementById("userReviews").value;
  reviews.Post_Date = null;
  reviews.Rating = rating;

  var postReview = new XMLHttpRequest();

  postReview.open("POST", review_url, true);

  postReview.setRequestHeader("Content-Type", "application/json");
  postReview.onload = function () {
    console.log("new Review sent");
    fetchReviews();
  };

  postReview.send(JSON.stringify(reviews));
}

// This function allows the user to mouse hover the black and white stars
// so that it will turn to a colored version when hovered
function rateIt(element) {
  var num = element.getAttribute("value");
  var classname = element.getAttribute("class");
  var stars = document.getElementsByClassName(classname);
  var classTarget = "." + classname;

  // This is another way of writing 'for' loop, which intialises the
  // star images to use black and white
  for (let star of stars) {
    star.setAttribute("src", starBWImage);
  }
  changeStarImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when
// the mouse cursor hovers over the popcorn image.
function changeStarImage(num, classTarget) {
  switch (eval(num)) {
    case 1:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", starImage);
      rating = 1;
      break;
    case 2:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", starImage);
      document
        .querySelector(classTarget + "[value='2']")
        .setAttribute("src", starImage);
      rating = 2;
      break;
    case 3:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", starImage);
      document
        .querySelector(classTarget + "[value='2']")
        .setAttribute("src", starImage);
      document
        .querySelector(classTarget + "[value='3']")
        .setAttribute("src", starImage);
      rating = 3;
      break;
    case 4:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", starImage);
      document
        .querySelector(classTarget + "[value='2']")
        .setAttribute("src", starImage);
      document
        .querySelector(classTarget + "[value='3']")
        .setAttribute("src", starImage);
      document
        .querySelector(classTarget + "[value='4']")
        .setAttribute("src", starImage);
      rating = 4;
      break;
    case 5:
      document
        .querySelector(classTarget + "[value='1']")
        .setAttribute("src", starImage);
      document
        .querySelector(classTarget + "[value='2']")
        .setAttribute("src", starImage);
      document
        .querySelector(classTarget + "[value='3']")
        .setAttribute("src", starImage);
      document
        .querySelector(classTarget + "[value='4']")
        .setAttribute("src", starImage);
      document
        .querySelector(classTarget + "[value='5']")
        .setAttribute("src", starImage);
      rating = 5;
      break;
  }
}

function editReview(element) {
  var item = element.getAttribute("item");

  currentIndex = item;

  document.getElementById("editnickname").value = review_array[item].Customer_username;
  document.getElementById("edituserReviews").value = review_array[item].Review;
  console.log(review_array[item].Rating);
  displayColorStar("editpop", review_array[item].Rating);
}

// This function displays the correct number of coloured popcorn
// based on the movie rating that is given in the user review

function displayColorStar(classname, num) {
  var st = document.getElementsByClassName(classname);
  var classTarget = "." + classname;

  for (let s of st) {
    s.setAttribute("src", starBWImage);
  }
  changeStarImage(num, classTarget);
}

// This function sends the comment data to the server for updating
function updateReview() {
  var response = confirm("Are you sure you want to update this review ?");

  if (response == true) {
    var edit_review_url = review_url + "/" + review_array[currentIndex].Review_ID;
    // new HTTPrequest instance to send request to server
    var updateReview = new XMLHttpRequest();

    // The HTTP method called 'PUT' is used here as we are updating data
    updateReview.open("PUT", edit_review_url, true);
    updateReview.setRequestHeader("Content-Type", "application/json");
    review_array[currentIndex].Customer_username = document.getElementById("editnickname").value;
    review_array[currentIndex].Review = document.getElementById("edituserReviews").value;
    review_array[currentIndex].Rating = rating;

    updateReview.onload = function () {
      fetchReviews();
    };

    updateReview.send(JSON.stringify(review_array[currentIndex]));
  }
}

// This function deletes the selected comment in a specific move 
function deleteReview(element) {
    var response = confirm("Are you sure you want to delete this review ?");

    if(response == true){
        // get the current item
        var item = element.getAttribute("item");
        var delete_review_url = review_url + "/" + review_array[item].Review_ID;
        var eraseReview = new XMLHttpRequest();

        eraseReview.open("DELETE", delete_review_url, true);
        eraseReview.onload = function() {
            fetchReviews();
        };
        eraseReview.send();
    }
}
