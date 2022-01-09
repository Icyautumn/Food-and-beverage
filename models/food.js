"use strict"

class Food{
    constructor(RestaurantID, TypeOfRestaurant, picture, title, availability, popularity){
        this.RestaurantID = RestaurantID;
        this.TypeOfRestaurant = TypeOfRestaurant;
        this.picture = picture;
        this.title = title;
        this.availability = availability;
        this.popularity = popularity;
    }

    getRestaurantID() {
        return this.RestaurantID;
    }

    getTypeOfRestaurant() {
        return this.TypeOfRestaurant;
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

    getpopularity() {
        return this.popularity;
    }
}

module.exports = Food;


