'use strict';
// const $ = require('jquery');

let userModel = require("./user_model");


module.exports.rate = () => {
    
    // class added to function that shows number of stars, full stars and star width
    $(".rate").rateYo({
        numStars: 10,
        fullStar: true,
        starWidth: "16px",
        multiColor: {
 
            "startColor": "#FF0000", //RED
            "endColor"  : "#FFD700"  //GREEN
        }
    });
 
};

// EL click function that allows you to click only of the stars for a specific card
$(document).on("click", ".rate",  function(){
    console.log($(this));
 
    // this allows you to get a popup with the rating in integer form
    var $rateYo = $(this).rateYo();
    //get rating 
    var rating = ($rateYo.rateYo("rating") *2);

    // rating * 2 will give you the correct integer.
    // this had to be done because the rating is based on 5 stars
    window.alert("Its " + rating + " Yo!");
    console.log("event.target parent", $(event.target).parents(".rate").attr("id"));
    userModel.addMovieRating(rating, $(event.target).parents(".rate").attr("id"));
});



    