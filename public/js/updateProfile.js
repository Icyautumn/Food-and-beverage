const e = require("cors");

function encode() {


    var selectedfile = document.getElementById("myinput").files;
    if(selectedfile.length > 0){

        // imageFile = the picture the user have selected
        var imageFile = selectedfile[0];
        var fileReader = new FileReader();

        fileReader.onload = function (fileLoadedEvent) {
            picture = fileLoadedEvent.target.result;

            var newImage = document.getElementById('target').src= picture;

            // var srcData = fileLoadedEvent.target.result;

            // //alert(srcData);
        }
    
        fileReader.readAsDataURL(imageFile);
        
        
    }



}


function update() {


    var UpdateUser = new XMLHttpRequest();

    UpdateUser.open("PUT", "/users", true);

    UpdateUser.setRequestHeader("Content-Type", "application/json");

    UpdateUser.onload=function () {

        var ER_DUP_ENTRY = 'ER_DUP_ENTRY';
        let results = JSON.parse(UpdateUser.responseText);

        if(results.code == ER_DUP_ENTRY){
            console.log(results.code);
            typeoferror = results.sqlMessage;
            console.log(typeoferror);
            if(typeoferror.includes("Username")){
                alert("Username has been taken, please change");
                $('#failModal').modal('show');
            }
            if(typeoferror.includes("Contact_Number_UNIQUE")){
                alert("Contact number has been taken, please change");
                $('#failModal').modal('show');
            }
        }else{
            $('#successModal').modal('show');

        }
        
    }
    Username = document.getElementById("username").value;
    Contact_Number = document.getElementById("contact_number").value;
    Address = document.getElementById("Address").value;
    postal_code = document.getElementById("postal_code").value;
    if(document.getElementById("male").checked == true){
        var Gender = "male";
    }
    else {
        var Gender = "female";
    }

    var first_name = document.getElementById("first_name").value;

    var last_name = document.getElementById("last_name").value;



    var token = sessionStorage.getItem("token");
    var payload = {Username: Username, picture:picture, Contact_Number: Contact_Number, token: token, 
    Address: Address, postal_code: postal_code, Gender: Gender, first_name:first_name, last_name:last_name}


    UpdateUser.send(JSON.stringify(payload));
}

function updatePassword() {
    
    var updatePwd = new XMLHttpRequest();

    updatePwd.open("PUT", "/users/password", true);

    updatePwd.setRequestHeader("Content-Type", "application/json");

    updatePwd.onload = function() {

        let result = JSON.parse(updatePwd.responseText);
        console.log(result.result);
        if (result.result == "invalid old password"){
            alert("your old password is incorrect");
        }else{
            $('#successModal').modal('show');
        }
        
    }

    var old_Password = document.getElementById("old_password").value;
    // console.log(old_Password);
    var Password = document.getElementById("new_password").value;
    // console.log(Password);
    var new_password2 = document.getElementById("new_password2").value;
    // console.log(new_password2);

    if (Password == new_password2){
        var Username = sessionStorage.getItem("username");
        var payload = {Username:Username, old_Password: old_Password, Password: Password};
        // console.log(payload);
        updatePwd.send(JSON.stringify(payload))
    }
    else{
        alert("your new passwords do not match")
    }
}

function deleteAccount() {
    var deleteAcc = new XMLHttpRequest();
    deleteAcc.open("DELETE", "/users", true);

    deleteAcc.setRequestHeader("Content-Type", "application/json");

    deleteAcc.onload = function(){
        $('#registerMenu').show();
        $('#loginMenu').show();
        $('#logoutMenu').hide();
        $('#editMenu').hide();
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        window.location.href="index.html";

    }

    var Username = document.getElementById("Delete_Username").value;
    var password = document.getElementById("Password_Delete").value;
    var token = sessionStorage.getItem("token");

    var payload = {Username:Username, Password:password, token:token};
    deleteAcc.send(JSON.stringify(payload));

}

function showchangepassword(){
    var password = document.getElementById("password");
    var user = document.getElementById("info");
    var delete_option = document.getElementById("delete");
    if(password.style.display === "none"){
        user.style.display = "none";
        delete_option.style.display = "none"
        password.style.display = "block";
    }else{
        console.log("me not working");
    }
}

function showUser(){
    var password = document.getElementById("password");
    var user = document.getElementById("info");
    var delete_option = document.getElementById("delete");
    if(user.style.display === "none"){
        user.style.display = "block";
        delete_option.style.display = "none"
        password.style.display = "none";
    }else{
        console.log("me not working");
    }
}

function showdelete(){
    var password = document.getElementById("password");
    var user = document.getElementById("info");
    var delete_option = document.getElementById("delete");
    if(delete_option.style.display === "none"){
        user.style.display = "none";
        delete_option.style.display = "block"
        password.style.display = "none";
    }else{
        console.log("me not working");
    }
}