"use strict";

var db = require('../db-connections');

class foodDB{
    getAllRestaurants(callback){
        var sql = "SELECT * FROM food_n_beverage.food";
        db.query(sql, callback);
    }

    GetTypeOfRestaurants(TypeOfRestaurant, callback){
        var sql = "SELECT * FROM food WHERE TypeOfRestaurant = ?";
        return db.query(sql,[TypeOfRestaurant], callback);
    }
}




module.exports = foodDB;