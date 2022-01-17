"use strict";
const UserDB = require('../models/UserDB');
var userDB = new UserDB();

const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Review');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var secret = 'somesecretkey';
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
    var review = new Review(null,request.body.Customer_username, request.body.RestaurantID, request.body.Review, request.body.Rating, request.body.title, now);
    //  var token = request.body.token;


     reviewsDB.addReview(review, function (error, result) {
        if(error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });

    //  try {
    //     // if decoded is legitmate token
    //     var decoded = jwt.verify(token, secret);
    //     console.log(decoded);
       
    // } catch (error) {
    //     return respond.json({result:"invalid token"});
        
    // }
}

    

function updateReview(request, respond) {
    var now = new Date();
    var token = request.body.token;
    var review = new Review(parseInt(request.params.id), request.body.Customer_username, request.body.RestaurantID, request.body.Review, request.body.Rating, 
    request.body.title, now);



    try {
        // if decoded is legitmate token
        var decoded = jwt.verify(token, secret);
        console.log(decoded);
        reviewsDB.updateReview(review, function(error, result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });
    } catch (error) {
        return respond.json({result:"invalid token"});
        
    }
}
    

function deleteReview(request, respond){
    var reviewID = request.params.id;
    var token = request.body.token;

    try{
    var decoded = jwt.verify(token, secret);
        console.log(decoded);
        reviewsDB.deleteReview(reviewID, function(error, result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });
    } catch (error) {
        return respond.json({result:"invalid token"});
        
    }
}
    

module.exports = {getAllReviews, addReview, updateReview, deleteReview};