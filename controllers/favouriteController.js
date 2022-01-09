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
    var CustomerID = request.params.id;

    FavouriteDB.getSpecificFavourite(CustomerID, function(error, result){
        if(error) {
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addFavourite(request, respond) {
    
    var CustomerID = request.body.CustomerID;
    var restaurantID = request.body.restaurantID;
    var restaurant_title = request.body.restaurant_title;
    var token = request.body.token;

    
    try {
        // if decoded is legitmate token
        var decoded = jwt.verify(token, secret);
        console.log(decoded);;
        FavouriteDB.addFavourite(CustomerID, restaurantID, restaurant_title,  function (error, result) {
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
    var favouriteID = request.params.id;
    var token = request.body.token;


    try {
        // if decoded is legitmate token
        var decoded = jwt.verify(token, secret);
        console.log(decoded);;
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