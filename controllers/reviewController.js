"use strict";

const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Review');

var reviewsDB = new ReviewsDB();

function getAllReviews(request, respond) {
    reviewsDB.getAllReviews(function(error, result){
        if(error){
            respond.json(error);

        }
        else{
            respond.json(result);
        }
    });
}

function addReview(request, respond) {
    var now = new Date();
    var review = new Review(null, request.body.Customer_ID, request.body.Food_ID, request.body.Review, request.body.Rating, now.toString(), request.body.First_Name);
    reviewsDB.addReview(review, function (error, result) {
        if(error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
};

module.exports = {getAllReviews, addReview};