const User = require("../../models/User");


function loginMe() {
    var loginUser = new XMLHttpRequest();

    loginUser.open("POST", "/login", true);

    loginUser.setRequestHeader("Content-Type", "application/json");

    loginUser.onload=function () {


        // var login = JSON.parse(loginUser.responseText);
        

        $('#loginModal').modal('hide');
        var Username = JSON.parse(loginUser.responseText)
        var token = JSON.parse(loginUser.responseText)
        if (token.result != "invalid" && token.result != "wrong email"){
            $('#successModal').modal('show');
            document.getElementById("registerMenu").style.display="none";
            document.getElementById("loginMenu").style.display="none";
            
            document.getElementById("logoutMenu").style.display="block";
            document.getElementById("editMenu").style.display="block";

            // token saved under application
            sessionStorage.setItem("token", token.result);
            sessionStorage.setItem("username", Username.Username);
            document.getElementById("user_username").innerHTML = sessionStorage.getItem("username");
        }
        else{
            $('#failModal').modal('show');
        }


    }



    var Email = document.getElementById("EmailLogin").value;
    var password = document.getElementById("passwordLogin").value;
    

    var payload = {Email: Email, password: password}


    loginUser.send(JSON.stringify(payload));
}