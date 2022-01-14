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
   
    Contact_Number = document.getElementById("contact_number").value;
    Username = document.getElementById("username").value;
    var payload = {Username: Username, picture:picture, Contact_Number: Contact_Number}


    UpdateUser.send(JSON.stringify(payload));
}