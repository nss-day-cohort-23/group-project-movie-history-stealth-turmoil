'use strict';

const movie_model = require('./movie_model');
const movie_view = require('./movie_view');
// const $ = require('jquery');






function getMoreMovies(page, searchText){
// start setTimeout for each API request
    let timer = setTimeout(function () {
        //gets API data to page# given

        movie_model.getMovies(page, searchText)
            //prints each movies to the DOM
            .then((movieData) => {
                movieData.results.sort((a, b) => b.popularity - a.popularity);
                movieData.results.forEach(m =>{ 
                    movie_model.getCast(m.id)
                        .then(creditsData => movie_view.printMovie(m, creditsData.cast));
                    });
                });  //sends requests in 10 sec increments

            }, 10500 * (page-1));            
    $("#movieSearch").on("click", function() {
        clearTimeout(timer);
        // setTimeout(loadEnter(), 5000);
    });  
}


//             // }, 10000 * (page-1));
//             // // }, 10000 * (page-1));

//             }, 10500 * (page-1));

// }

function initialMovies (firstMovies, totalPages, searchText) {
    console.log(firstMovies);
    //sorts first set of movies by popularity
    firstMovies.sort((a,b)=>b.popularity - a.popularity);
    //sends each movie to be printed to DOM
    firstMovies.forEach(i=>{
        movie_model.getCast(i.id)
            .then(creditsData => movie_view.printMovie(i, creditsData.cast));
    });
    //sends each remaining page number to setTimout function

    // for (let i=2;i<(totalPages+1);i++){
    //     getMoreMovies(i);
    // }

    for (let i=2;i<(totalPages+1);i++){
        getMoreMovies(i, searchText);
    }

}



$(document).on("keypress", "#movieSearch", function(){
    if (event.keyCode == 13) {
        let searchText = $(this).val();
        $(this).val('');
        $("#output").empty();
        //fetches page 1 (20movies); 
        //sends those movies plus total #pages & search text
        movie_model.getMoviesInit(searchText)
            .then(movieData=>initialMovies(movieData.results, movieData.total_pages, searchText));
    }
});


movie_model.getTopMovies()
    .then((topMovies) => movie_view.printTopMovies(topMovies));
