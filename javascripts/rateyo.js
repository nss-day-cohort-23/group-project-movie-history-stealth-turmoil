'use strict';

// const $ = require('jquery');


module.exports.rate = () => {
    console.log('working?');
    
    
    $(".rate").rateYo({
        numStars: 10,
        fullStar: true,
        starWidth: "16px"
        
    });
 
};


$(document).on("click", ".rate",  function(){
    console.log($(this));
 
    var $rateYo = $(this).rateYo();
    /* get rating */
    var rating = $rateYo.rateYo("rating");
    
    window.alert("Its " + rating *2 + " Yo!");
});


    