"use Strict"
const foodDB = require('../models/foodDB');

var FoodDB = new foodDB();

function getAllRestaurants(request, respond){
    FoodDB.getAllRestaurants(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function GetTypeOfRestaurants(request, respond) {
    var TypeOfRestaurant = request.body.TypeOfRestaurant;

    FoodDB.GetTypeOfRestaurants(TypeOfRestaurant, function(error, result){
        if(error) {
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllRestaurants, GetTypeOfRestaurants};