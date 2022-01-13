

function loginMe() {
    var loginUser = new XMLHttpRequest();

    loginUser.open("POST", "/login", true);

    loginUser.setRequestHeader("Content-Type", "application/json");

    loginUser.onload=function () {
        

        $('#loginModal').modal('hide');
        
        var token = JSON.parse(loginUser.responseText)
        console.log(token.result);
        if (token.result != "invalid"){
            $('#successModal').modal('show');
            document.getElementById("registerMenu").style.display="none";
            document.getElementById("loginMenu").style.display="none";
            
            document.getElementById("logoutMenu").style.display="block";

            // token saved under application
            sessionStorage.setItem("token", token.result);
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