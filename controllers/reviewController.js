"use strict";

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
    var review = new Review(null, request.body.Customer_ID, request.body.Food_ID, request.body.Review, request.body.Rating, now.toString(),
     request.body.First_Name, request.body.title);
    reviewsDB.addReview(review, function (error, result) {
        if(error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
};


function updateReview(request, respond) {
    var now = new Date();
    var review = new Review(parseInt(request.params.id), request.body.Customer_ID, 
    request.body.Food_ID, request.body.Review, request.body.Rating, now.toString(), request.body.First_Name, request.body.title);
    reviewsDB.updateReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            const hash = result[0].password;
            // compare the encrypted password with the clear text, if its the same, flag is true
            var flag = bcrypt.compareSync(password, hash);
            if (flag){
                var token = jwt.sign(Email, secret);
                return respond.json({result:token});
            }
            else{
                return respond.json({result:"invalid token"});
            }
        }
    });
}

function deleteReview(request, respond){
    var reviewID = request.params.id;
    reviewsDB.deleteReview(reviewID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
} 

module.exports = {getAllReviews, addReview, updateReview, deleteReview};