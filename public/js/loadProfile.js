
$(document).ready(function() {

    var getProfile = new XMLHttpRequest();

    getProfile.open("POST", 'http://127.0.0.1:8080/login/user', true);
    getProfile.setRequestHeader("Content-Type", "application/json");
    getProfile.onload=function() {

        // take json format and convert into string 
        var profile = JSON.parse(getProfile.responseText);

        console.log(getProfile.responseText);

        Username = profile[0].Username;
        Contact_Number = profile[0].Contact_Number;
        Address = profile[0].Address;
        postal_code = profile[0].postal_code;
        if (profile[0].Gender == "male"){
            document.getElementById("male").checked = true;
        } else{
            document.getElementById("female").checked = true;

        } 

        first_name = profile[0].first_name;

        last_name = profile[0].last_name;

        picture = profile[0].picture;

        if (picture == null){
            document.getElementById("target").src = "../images/avatar/avartar.png"; // if target null then put default picture as avartar
            
        } else{
            document.getElementById("target").src = picture; // if user have picture alr will picture to that picture
        }


        document.getElementById('username').value = Username;
        document.getElementById('contact_number').value = Contact_Number;
        document.getElementById('Address').value = Address;
        document.getElementById('postal_code').value = postal_code;
        // document.getElementById('Gender').value = Gender;
        document.getElementById('first_name').value = first_name;

        document.getElementById('last_name').value = last_name;
        
    }

    var payload = {token: token};
    // chance json object into string
    getProfile.send(JSON.stringify(payload));
})

// put it in onload function
