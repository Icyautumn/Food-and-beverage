"use strict";

class User {
    constructor(CustomerID, Email, Sign_Up_Date, Contact_Number, Address, postal_code, Username, Password, Gender, first_name, last_name, picture){
        this.CustomerID = CustomerID;
        this.Email = Email;
        this.Sign_Up_Date = Sign_Up_Date;
        this.Contact_Number = Contact_Number;
        this.postal_code = postal_code;
        this.Username = Username;
        this.Password = Password;
        this.Gender = Gender;
        this.picture = picture;
        this.Address = Address
        this.first_name = first_name;
        this.last_name = last_name;
    }

    getUsername() {
        return this.Username;
    }

    getCustomerID() {
        return this.CustomerID;
    }

    getfirst_name(){
        return this.first_name;
    }

    getlast_name(){
        return this.last_name;
    }

    getEmail() {
        return this.Email;
    }

    getSign_Up_Date() {
        return this.Sign_Up_Date;
    }

    getContact_Number() {
        return this.Contact_Number;
    }
    getAddress(){
        return this.Address;
    }

    getpostal_code() {
        return this.postal_code;
    }

    getPassword() {
        return this.Password;
    }

    getGender(){
        return this.Gender;
    }
    getpicture(){
        return this.picture;
    }

    
}


module.exports = User;