// this function is to display all the reviews of the food
// whenever the user click on the "comment button"

function showFoodReviews(element){
    document.getElementById("emptyReview").innerHTML = "No Review Yet. Create one now";
    var item = element.getAttribute("item");
    currentindex = item;
    document.getElementById("reivew").textContent = "Review for " + food_array[item].title;
    document.getElementById("reviewBody").textContent="";

    for(var i = 0; i < review_array.length; i++){
        if(review_array[i].Food_ID===food_array[item].Food_id){
            document.getElementById("emptyReview").innerHTML = "";
            selectedFoodID = Food_ID[item].Food_id;
            star ="";
            var html = '<div class="text-center" style="width:100%;">                                                           \
            <div class="card">                                                                                  \
                <div class="card-body">                                                                         \
                    <p class="card-text" id="rating' + i + '">' + review_array[i].Review + "</p>               \
                    <small>by " + Review_array[i].First_Name + " @ " + Review_array[i].Post_Date + "</small>   \
                </div>                                                                                          \
            </div>                                                                                              \
        </div>";

        document.getElementById("reviewBody").insertAdjacentHTML('beforeend', html);

        var star = "";
        for(var j = 0 ; j < review_array[i].rating; j++){
            console.log(i);
            star += "<img src='images/rating/star_coloured.png' style='width:50px'/>";

        }

        star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteReview(this)' ></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editReviewModal' data-dismiss='modal' item='" + i + "' onClick='editReview(this)' ></i>";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");

        }
    }
}