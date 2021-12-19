"use Strict"
const foodDB = require('../models/foodDB');

var FoodDB = new foodDB();

function getAllFood(request, respond){
    FoodDB.getAllFood(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllFood};