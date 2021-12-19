"use strict"

var db = require('../db-connections');

class ReviewsDB {
    getAllReviews(callback) {
        var sql = "SELECT * FROM food_n_beverage.reviews";
        db.query(sql, callback);
    }

    addReview(review, callback){
        // the question marks are the placeholders
        var sql = "INSERT INTO reviews (Customer_ID, Food_ID, Review, Rating, Post_Date, First_Name) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(sql, [review.getCustomer_ID(), review.getFood_ID(), review.getReview(), 
            review.getPost_Date(), review.getFirst_Name()], callback);
    }
}

module.exports = ReviewsDB;