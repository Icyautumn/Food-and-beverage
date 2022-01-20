"use strict";

const UserDB = require('../models/UserDB');
const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');
const User = require('../models/User');
const res = require('express/lib/response');
var secret = 'somesecretkey';

var userDB = new UserDB();

function getAllUser(request, respond) {
    userDB.getAllUser(function(error, result){
        if(error){
            respond.json(error);

        }
        else{
            respond.json(result);
        }
    });
}

function addUser(request, respond) {
    var now = new Date();
    // client going to input username
    var Sign_Up_Date = now
    var Email = request.body.Email;
    var Contact_Number = request.body.Contact_Number;
    var Address = request.body.Address;
    var postal_code = request.body.postal_code;
    var username = request.body.Username;
    var Gender = request.body.Gender;
    var first_name = request.body.first_name;
    var last_name = request.body.last_name;

    var password = request.body.password
    //encrypt the password
    password = bcrypt.hashSync(password, 10)
    
    userDB.addUser(Email, Sign_Up_Date, Contact_Number, Address, postal_code, username, password, Gender, first_name, last_name,  function (error, result) {
        if(error) {
            respond.json(error);
        }
        else {
            return respond.json({result, username: username, email: Email});
        }
    })
};

function loginUser(request, respond) {
    // var now = new Date();
    // client going to input username
    var Email = request.body.Email;
    var password = request.body.password;
    
    try{
        var mail = jwt.verify(Email, secret);
        userDB.loginUser(Email, function (error, result) {
            if(error) {
                respond.json(error);
            }
            else {
                const hash = result[0].password;
                var Username = result[0].Username;
                // compare the encrypted password with the clear text, if its the same, flag is true
                console.log(hash);
                var flag = bcrypt.compareSync(password, hash);
                if (flag){
                    var token = jwt.sign(Email, secret);
                    return respond.json({result:token, Username: Username});
                    
                }
                else{
                    return respond.json({result:"invalid"});
                }
            }
        });
    } catch (error){
        respond.json({result:"wrong email"});
    }
    
    
}


function getUser(request, respond) {
    var token = request.body.token;
    
    
    try {
        var decoded = jwt.verify(token, secret);

        userDB.getUser(decoded, function(error, result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });

    } catch (error) {
        respond.json({result: "invalid token"});
    }

    
    
};

function updateUser(request, respond) {
    var now = new Date();
    var user = new User(null, null, now, request.body.Contact_Number, request.body.Address, request.body.postal_code,
        request.body.Username, null, request.body.Gender, request.body.first_name, request.body.last_name, request.body.picture);
    var token = request.body.token;
    
    // var Contact_Number = request.body.Contact_Number;
    // var Address = request.body.Address;
    // var postal_code = request.body.postal_code;
    // var Username = request.body.Username;
    // var Gender = request.body.Gender;
    // var token = request.body.token;
    // var first_name = request.body.first_name;
    // var last_name = request.body.last_name;
    // var picture = request.body.picture;
console.log(user);
    try {
        // if decoded is legitmate token
       var decoded = jwt.verify(token, secret);
       
        userDB.updateUser(user, decoded, function(error, result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });
    } catch (error) {
        return respond.json({result:"invalid token"});
    }


    
}

function deleteUser(request, respond){
    var userID = request.params.id;

    try {
        // if decoded is legitmate token
        var decoded = jwt.verify(token, secret)
        console.log(decoded);
        userDB.deleteUser(userID, function(error, result){
            if(error){
                respond.json(error);
            }
            else{
                
                respond.json(result);
            }
        });
    } catch (error) {
        return respond.json({result:"invalid token"});
    }
    
} 

module.exports = {getAllUser, addUser, updateUser, deleteUser, loginUser, getUser};