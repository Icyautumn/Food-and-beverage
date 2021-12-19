"use strict"

class Food{
    constructor(food_id, description, picture, title, availability){
        this.food_id = food_id;
        this.description = description;
        this.picture = picture;
        this.title = title;
        this.availability = availability;
    }

    getfood_id() {
        return this.food_id;
    }

    getdescription() {
        return this.description;
    }

    getpicture() {
        return this.picture;
    }

    gettitle() {
        return this.title;
    }

    getavailability() {
        return this.availability;
    }
}

module.exports = Food;


