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


        $('#successModal').modal('show');

        
        
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