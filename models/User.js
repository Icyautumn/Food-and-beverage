"use strict";

class User {
    constructor(CustomerID, Email, Sign_Up_Date, Contact_Number, postal_code, Username, Password, Gender){
        this.CustomerID = CustomerID;
        this.Email = Email;
        this.Sign_Up_Date = Sign_Up_Date;
        this.Contact_Number = Contact_Number;
        this.postal_code = postal_code;
        this.Username = Username;
        this.Password = Password;
        this.Gender = Gender;
    }

    getCustomerID() {
        return this.CustomerID;
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

    getpostal_code() {
        return this.postal_code;
    }

    getPassword() {
        return this.Password;
    }

    getGender(){
        return this.Gender;
    }

    
}


module.exports = User;