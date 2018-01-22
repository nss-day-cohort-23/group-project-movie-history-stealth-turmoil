'use strict';

// const $ = require('jquery');


module.exports.rate = () => {
    console.log('working?');
 
            $("#rate").rateYo().rateYo({
              numStars: 10
            });
            $("#rate").rateYo("option", "numStars", 10);
          };

    