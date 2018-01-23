'use strict';

const $ = require('jquery');
const model = require('./model');
const view = require('./view');


function getMoreMovies(page, searchText){
// start setTimeout for each API request
    let timer = setTimeout(function () {
        //gets API data to page# given
        model.getMovies(page, searchText)
            //prints each movies to the DOM
            .then((movieData) => {
                movieData.results.sort((a, b) => b.popularity - a.popularity);
                movieData.results.forEach(m =>{ 
                    model.getCast(m.id)
                        .then(creditsData => view.printMovie(m, creditsData.cast));
                    });
                });  //sends requests in 10 sec increments
            }, 10500 * (page-1));            
    $("#movieSearch").on("click", function() {
        clearTimeout(timer);
        // setTimeout(loadEnter(), 5000);
    });  
}

function initialMovies (firstMovies, totalPages, searchText) {
    console.log(firstMovies);
    //sorts first set of movies by popularity
    firstMovies.sort((a,b)=>b.popularity - a.popularity);
    //sends each movie to be printed to DOM
    firstMovies.forEach(i=>{
        model.getCast(i.id)
            .then(creditsData => view.printMovie(i, creditsData.cast));
    });
    //sends each remaining page number to setTimout function
    for (let i=2;i<(totalPages+1);i++){
        getMoreMovies(i, searchText);
    }
}


function loadEnter() {
    $("#movieSearch").keypress(function(){
        if (event.keyCode == 13) {
            let searchText = $(this).val();
            $(this).val('');
            $("#output").empty();
            //fetches page 1 (20movies); 
            //sends those movies plus total #pages & search text
            model.getMoviesInit(searchText)
                .then(movieData=>initialMovies(movieData.results, movieData.total_pages, searchText));
            // $("#movieSearch").val("");
        }
    });
}

function loadPage() {
    loadEnter();
    model.getTopMovies()
        .then((topMovies)=>view.printTopMovies(topMovies));
}

loadPage();