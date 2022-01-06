"use strict";

var db = require('../db-connections');

class favouriteDB{
    getAllFavourites(callback){
        var sql = "SELECT * FROM food_n_beverage.favourite";
        db.query(sql, callback);
    }

    getSpecificFavourite(CustomerID, callback){
        var sql = "SELECT * FROM favourite WHERE CustomerID = ?";
        return db.query(sql,[CustomerID], callback);
    }

    addFavourite(customerID, restaurantID, restaurant_title, callback){
        // the question marks are the placeholders
        var sql = "INSERT INTO favourite (CustomerID, restaurantID, restaurant_title) VALUES (?,?,?)";
        db.query(sql, [customerID, restaurantID, restaurant_title], callback);
    }
    deleteFavourite(favouriteID, callback){
        var sql = "DELETE FROM favourite WHERE favouriteID = ?";
        return db.query(sql,[favouriteID], callback);
    }
}




module.exports = favouriteDB;