var mongoose = require("mongoose");
var Restaurant = require("./models/restaurant");

var data = [
    {
      name: "Zeala",
      type: "East Indian",
      image: "http://www.shenzhen-standard.com/wp-content/uploads/2010/05/DSC015721.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location: "Barnet Park, NY",
      rating: "5 stars"
    },
    {
      name: "Burger Din",
      type: "Southern Style",
      image: "http://static1.squarespace.com/static/51d32c54e4b001d5c1392e82/t/5243112fe4b07ea3b5394a73/1380127025989/Zombie+Burger+%2B+Drink+Lab+-+interior.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location: "Arista, Texas",
      rating: "4.5 stars"
    },
    {
      name: "Vegetable Garden",
      type: "Vegetarian",
      image: "http://retaildesignblog.net/wp-content/uploads/2013/02/SHARED-TERRACE-restaurant-Moment-Design-Tokyo-03.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location: "Tampa, FL",
      rating: "5 stars"
    }
]

function seedDB(){
   //Remove all restaurant
   Restaurant.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed Restaurants!");
         //add a few restaurants
        data.forEach(function(seed){
            Restaurant.create(seed, function(err, restaurant){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a Restaurant");
                    restaurant.save();
                    //create a comment
                    // Comment.create(
                    //     {
                    //         text: "This place is great, but I wish there was internet",
                    //         author: "Homer"
                    //     }, function(err, comment){
                    //         if(err){
                    //             console.log(err);
                    //         } else {
                    //             campground.comments.push(comment);
                    //             campground.save();
                    //             console.log("Created new comment");
                    //         }
                    //     });
                }
            });
        });
    });
    //add a few comments
}

module.exports = seedDB;
