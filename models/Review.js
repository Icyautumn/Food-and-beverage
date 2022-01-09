"use strict";

class Review {
    constructor(Review_ID, Customer_username, RestaurantID, Review, Rating, title, Post_Date){
        this.Review_ID = Review_ID;
        this.Customer_username = Customer_username;
        this.RestaurantID = RestaurantID;
        this.Review = Review;
        this.Rating = Rating;
        this.Post_Date = Post_Date;
        this.title = title;
    }

    getReview_ID() {
        return this.Review_ID;
    }

    getCustomer_username() {
        return this.Customer_username;
    }

    getRestaurantID() {
        return this.RestaurantID;
    }

    getReview() {
        return this.Review;
    }

    getRating() {
        return this.Rating;
    }

    getPost_Date() {
        return this.Post_Date;
    }


    gettitle(){
        return this.title;
    }

    setReview_ID(review_ID) {
        this.review_ID = review_ID;
    }

    setCustomer_username(Customer_username) {
        this.Customer_username = Customer_username;
    }

    setRestaurantID(RestaurantID) {
        this.RestaurantID = RestaurantID;
    }

    setReview(Review) {
        this.Review = Review;
    }

    setRating(Rating) {
        this.Rating = Rating;
    }

    setPost_Date(Post_Date) {
        this.Post_Date = Post_Date;
    }


    settitle(title){
        this.title = title;
    }
}


module.exports = Review;