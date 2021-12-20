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
        db.query(sql, [review.getCustomer_ID(), review.getFood_ID(), review.getReview(), review.getRating(),
            review.getPost_Date(), review.getFirst_Name()], callback);
    }

    updateReview(review, callback){
        var sql = "UPDATE reviews SET Review = ?, Rating = ?, Post_Date= ? WHERE Review_ID = ?";
        return db.query(sql, [review.getReview(), review.getRating(), review.getPost_Date(), review.getReview_ID()], callback);
    }

    deleteReview(ReviewID, callback){
        var sql = "DELETE FROM reviews WHERE Review_ID = ?";
        return db.query(sql,[ReviewID], callback);
    }
}

module.exports = ReviewsDB;