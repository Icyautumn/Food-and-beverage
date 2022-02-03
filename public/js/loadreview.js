
$(document).ready(function() {

    var getReview = new XMLHttpRequest();

    getReview.open("POST", 'http://127.0.0.1:8080/login/user', true);
    getReview.setRequestHeader("Content-Type", "application/json");
    getReview.onload=function() {

        // take json format and convert into string 
        var profile = JSON.parse(getReview.responseText);


        Username = profile[0].Username;
        document.getElementById('nickname').value = Username;
        
    }
    var token = sessionStorage.getItem("token");
    var payload = {token: token};
    // chance json object into string
    getReview.send(JSON.stringify(payload));
})

// put it in onload function
