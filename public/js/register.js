

function registerMe() {
    var RegisterUser = new XMLHttpRequest();

    RegisterUser.open("POST", "/users", true);

    RegisterUser.setRequestHeader("Content-Type", "application/json");

    RegisterUser.onload=function () {
        

        $('#registerModal').modal('hide');
        $('#successModal').modal('show');


    }



    var Email = document.getElementById("Email").value;
    console.log("Email", Email);
    var password = document.getElementById("password").value;
    console.log("password", password);
    var Contact_Number = document.getElementById("Contact_Number").value;
    console.log("Contact_Number", Contact_Number);
    var postal_code = document.getElementById("postal_code").value;
    console.log("postal", postal_code);
    var Address = document.getElementById("user_address").value;
    console.log("Address", Address);
    var Username = document.getElementById("username").value;
    console.log("Username", Username);
    var first_name = document.getElementById("first_name").value;
    console.log("first_name", first_name);
    var last_name = document.getElementById("last_name").value;
    console.log("last_name", last_name);

    if(document.getElementById("male").checked == true){
        var Gender = "male";
    }
    else {
        var Gender = "female";
    }
    console.log("Gender",Gender);

    var payload = {Email: Email, password: password, Contact_Number: Contact_Number, 
        postal_code:postal_code, Address:Address, Username:Username, first_name:first_name, last_name:last_name, Gender: Gender }


    RegisterUser.send(JSON.stringify(payload));
}