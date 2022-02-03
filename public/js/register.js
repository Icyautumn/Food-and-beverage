

function registerMe() {
    var RegisterUser = new XMLHttpRequest();

    RegisterUser.open("POST", "/users", true);

    RegisterUser.setRequestHeader("Content-Type", "application/json");

    RegisterUser.onload=function () {

        var ER_DUP_ENTRY = 'ER_DUP_ENTRY';
        let results = JSON.parse(RegisterUser.responseText);

        if(results.code == ER_DUP_ENTRY){
            typeoferror = results.sqlMessage;
            if(typeoferror.includes("Username")){
                alert("Username has been taken, please change");
            }
            else if(typeoferror.includes("Contact_Number")){
                alert("Contact number has been taken, please change")
            }
            else{
                alert("Email has been taken, please change");
            }
        }
        else{
            $('#registerModal').modal('hide');
            $('#successModal').modal('show');
        }
        

        


    }



    var Email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    var Contact_Number = document.getElementById("Contact_Number").value;
    var postal_code = document.getElementById("postal_code").value;
    var Address = document.getElementById("user_address").value;
    var Username = document.getElementById("username").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;

    if(document.getElementById("male").checked == true){
        var Gender = "male";
    }
    else {
        var Gender = "female";
    }

    var payload = {Email: Email, password: password, Contact_Number: Contact_Number, 
        postal_code:postal_code, Address:Address, Username:Username, first_name:first_name, last_name:last_name, Gender: Gender }


    RegisterUser.send(JSON.stringify(payload));
}