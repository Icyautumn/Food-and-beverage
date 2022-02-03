"use strict";

var db = require('../db-connections');

class foodDB{
    getAllRestaurants(callback){
        var sql = "SELECT food.*, AVG(reviews.rating) AS Average FROM food LEFT JOIN reviews ON food.Food_id = reviews.RestaurantID GROUP BY food.Food_id";
        db.query(sql, callback);
    }

    GetTypeOfRestaurants(TypeOfRestaurant, callback){
        var sql = "SELECT * FROM food WHERE TypeOfRestaurant = ?";
        return db.query(sql,[TypeOfRestaurant], callback);
    }
}




module.exports = foodDB;