"use strict";

class Review {
    constructor(Review_ID, Customer_ID, Food_ID, Review, Rating, Post_Date, First_Name, title){
        this.Review_ID = Review_ID;
        this.Customer_ID = Customer_ID;
        this.Food_ID = Food_ID;
        this.Review = Review;
        this.Rating = Rating;
        this.Post_Date = Post_Date;
        this.First_Name = First_Name;
        this.title = title;
    }

    getReview_ID() {
        return this.Review_ID;
    }

    getCustomer_ID() {
        return this.Customer_ID;
    }

    getFood_ID() {
        return this.Food_ID;
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

    getFirst_Name() {
        return this.First_Name;
    }

    gettitle(){
        return this.title;
    }

    setReview_ID(review_ID) {
        this.review_ID = review_ID;
    }

    setCustomer_ID(Customer_ID) {
        this.Customer_ID = Customer_ID;
    }

    setFood_ID(Food_ID) {
        this.Food_ID = Food_ID;
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

    setFirst_Name(First_Name) {
        this.First_Name = First_Name;
    }

    settitle(title){
        this.title = title;
    }
}


module.exports = Review;