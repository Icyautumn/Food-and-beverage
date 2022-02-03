"use strict"

var db = require('../db-connections');

class ReviewsDB {
    getAllReviews(callback) {
        var sql = "SELECT * FROM food_n_beverage.reviews";
        db.query(sql, callback);
    }


    addReview(review, callback){
        // the question marks are the placeholders
        var sql = "INSERT INTO reviews (Customer_username, RestaurantID, Review, Rating, title, Post_Date) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(sql, [review.getCustomer_username(), review.getRestaurantID(), review.getReview(), review.getRating(),
            review.gettitle(), review.getPost_Date()], callback);
    }

    updateReview(review, callback){
        
        var sql = "UPDATE reviews SET Review = ?, Rating = ?, Post_Date= ? WHERE Review_ID = ?";
        return db.query(sql, [review.getReview(), review.getRating(), review.getPost_Date(), review.getReview_ID()], callback);
    }

    deleteReview(ReviewID, callback){
        var sql = "DELETE FROM reviews WHERE Review_ID = ?";
        return db.query(sql,[ReviewID], callback);
    }

    avg_rating(restaurant_title, callback){
        var sql= "SELECT avg(rating) as average FROM reviews WHERE title = ?";
        return db.query(sql, [restaurant_title], callback);
    }
}

module.exports = ReviewsDB;