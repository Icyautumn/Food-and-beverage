"use Strict"

const UserDB = require('../models/UserDB');
var userDB = new UserDB();
const favouriteDB = require('../models/favouriteDB');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var secret = 'somesecretkey';
var FavouriteDB = new favouriteDB();

function getAllFavourites(request, respond){
    FavouriteDB.getAllFavourites(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getSpecificFavourite(request, respond) {
    var Customer_Username = request.body.Customer_Username;


    FavouriteDB.getSpecificFavourite(Customer_Username, function(error, result){
        if(error) {
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addFavourite(request, respond) {
    
    var Customer_Username = request.body.Customer_Username;
    var restaurant_title = request.body.restaurant_title;
    var token = request.body.token;

    
    try {
        // if decoded is legitmate token
        var decoded = jwt.verify(token, secret);
        FavouriteDB.addFavourite(Customer_Username, restaurant_title,  function (error, result) {
            if(error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    
    } catch (error) {
        return respond.json({result:"invalid token"});
        
    }
}
   



function deleteFavourite(request, respond){
    var favouriteID = request.body.favouriteID;
    var token = request.body.token;


    try {
        // if decoded is legitmate token
        var decoded = jwt.verify(token, secret);
        FavouriteDB.deleteFavourite(favouriteID, function(error, result){
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
    

module.exports = {getAllFavourites, getSpecificFavourite, deleteFavourite, addFavourite};