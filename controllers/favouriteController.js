"use Strict"
const favouriteDB = require('../models/favouriteDB');

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

    
    
    FavouriteDB.addFavourite(CustomerID, restaurantID, restaurant_title,  function (error, result) {
        if(error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
};



function deleteFavourite(request, respond){
    var favouriteID = request.params.id;
    FavouriteDB.deleteFavourite(favouriteID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            
            respond.json(result);
        }
    });
} 

module.exports = {getAllFavourites, getSpecificFavourite, deleteFavourite, addFavourite};