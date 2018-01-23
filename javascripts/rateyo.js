'use strict';

// const $ = require('jquery');


module.exports.rate = () => {
    console.log('working?');
    
    
    $(".rate").rateYo({
        numStars: 10,
        fullStar: true,
        starWidth: "16px",
         rating: "50%",
        precision: 0
        
    });
 
};

// // Getter
// var starWidth = $(".rate").rateYo("option", "starWidth");
// var fullStar = $(".rate").rateYo("option", "fullStar");
// var numStar = $(".rate").rateYo("option", "numStars");
 
// // Setter
// $(".rate").rateYo("option", "starWidth", "1px"); 
// $(".rate").rateYo("option", "numStars", 10);
// $(".rate").rateYo("option", "fullStar", true);



    