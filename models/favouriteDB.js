"use strict";

var db = require('../db-connections');

class favouriteDB{
    getAllFavourites(callback){
        var sql = "SELECT * FROM favourite, food WHERE food.title = favourite.restaurant_title";
        //  (SELECT title FROM food WHERE food.Food_id = favourite.restaurantID) AS Restaurant FROM favourite, (SELECT TypeOfRestaurant FROM food WHERE food.Food_id = favourite.restaurantID) AS Type FROM favourite)  ";
        // FROM food_n_beverage.favourite        
        db.query(sql, callback);
    }

    getSpecificFavourite(customer_Username, callback){
        var sql = "SELECT * FROM favourite WHERE Customer_Username = ? ";
        return db.query(sql,[customer_Username], callback);
    }

    addFavourite(customer_Username, restaurant_title, callback){
        // the question marks are the placeholders
        var sql = "INSERT INTO favourite (Customer_Username, restaurant_title) VALUES (?,?)";
        db.query(sql, [customer_Username, restaurant_title], callback);
    }
    deleteFavourite(favouriteID, callback){
        var sql = "DELETE FROM favourite WHERE favouriteID = ?";
        return db.query(sql,[favouriteID], callback);
    }
}




module.exports = favouriteDB;