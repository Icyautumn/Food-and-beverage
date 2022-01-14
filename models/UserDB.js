"use strict"

var db = require('../db-connections');

class UserDB {
    getAllUser(callback) {
        var sql = "SELECT * FROM food_n_beverage.user_database";
        db.query(sql, callback);
    }

    getUser(Email ,callback) {
        var sql = "SELECT distinct Username, Contact_Number, picture FROM food_n_beverage.user_database WHERE Email = ?";
        db.query(sql, [Email], callback);
    }

    loginUser(Email, callback) {
        var sql = "SELECT password FROM food_n_beverage.user_database WHERE Email = ?";
        db.query(sql,[Email], callback);
    }


    addUser(Email, Sign_Up_Date, Contact_Number, Address, postal_code, username, password, Gender, first_name, last_name, callback){
        // the question marks are the placeholders
        
        var sql = "INSERT INTO user_database (Email, Sign_Up_Date, Contact_Number, Address, postal_code, Username, Password, Gender, first_name, last_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [Email, Sign_Up_Date, Contact_Number, Address, postal_code, username, password, Gender, first_name, last_name], callback);
    }

    updateUser(user, Email,  callback){
       var sql = "UPDATE user_database SET Contact_Number = ?, Address = ?, postal_code = ?, Username = ?, Gender = ?, first_name = ?, last_name = ?, picture = ? WHERE Email = ? ";
       db.query(sql, [user.getContact_Number(), user.getAddress(), user.getpostal_code(), user.getUsername(), user.getGender(), user.getfirst_name(), user.getlast_name(), user.getpicture(), Email], callback);
    }

    deleteUser(userID, callback){
        var sql = "DELETE FROM user_database WHERE CustomerID = ?";
        return db.query(sql,[userID], callback);
    }
}

// class MembersDB {
//     getAllMembers(callback) {
//         var sql = "SELECT username, telephone FROM food_n_beverage.member";
//         db.query(sql, callback);
//     }

//     loginMember(username, callback) {
//         var sql = "SELECT password FROM food_n_beverage.member WHERE username = ?";
//         db.query(sql,[username], callback);
//     }


//     addMember(username, password, callback){
//         // the question marks are the placeholders
//         var sql = "INSERT INTO Member (username, password) VALUES (?, ?)";
//         db.query(sql, [username, password], callback);
//     }

//     updateMember(username, telephone, callback){
//         var sql = "UPDATE member SET Telephone = ? WHERE username = ?";
//         return db.query(sql, [telephone,username ], callback);
//     }

//     deleteMember(memberID, callback){
//         var sql = "DELETE FROM reviews WHERE id = ?";
//         return db.query(sql,[memberID], callback);
//     }
// }

module.exports = UserDB;