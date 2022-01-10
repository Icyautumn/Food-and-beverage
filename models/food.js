"use strict"

class Food{
    constructor(RestaurantID, TypeOfRestaurant, picture, title, Halal, popularity){
        this.RestaurantID = RestaurantID;
        this.TypeOfRestaurant = TypeOfRestaurant;
        this.picture = picture;
        this.title = title;
        this.Halal = Halal;
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

    getHalal() {
        return this.Halal;
    }

    getpopularity() {
        return this.popularity;
    }
}

module.exports = Food;


