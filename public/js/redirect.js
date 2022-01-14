$(document).ready(function (){

    var token = sessionStorage.getItem("token");
    if (token != null){
        $('#registerMenu').hide();
        $('#loginMenu').hide();
        $('#logoutMenu').show();
        $('#editMenu').show();

    } else {
        // make it show that if i click on the logo, make user go back to main page
        window.location.href="index.html";
    }

})