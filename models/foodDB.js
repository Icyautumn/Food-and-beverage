"use strict";

var db = require('../db-connections');

class foodDB{
    getAllFood(callback){
        var sql = "SELECT * FROM food_n_beverage.food";
        db.query(sql, callback);
    }
}


module.exports = foodDB;