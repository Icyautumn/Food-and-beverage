"use strict";

var db = require('../db-connections');

class foodDB{
    getAllFood(callback){
        var sql = "SELECT * FROM food_n_beverage.food";
        db.query(sql, callback);
    }

    getSpecificFood(ReviewID, callback){
        var sql = "SELECT * FROM food WHERE Food_id = ?";
        return db.query(sql,[ReviewID], callback);
    }
}




module.exports = foodDB;