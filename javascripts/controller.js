'use strict';

const $ = require('jquery');
const model = require('./model');
const view = require('./view');


function timedPrint(movies, time){
    //within a certain time frame...
    setTimeout(function(){
        //prints each movie of sub array to the DOM
        movies.forEach(m => $("#output").append(`${m} `));
    //offsets each print by factoring the time w/ index
    //3*1,3*2,3*3
    }, 3000 * time);
}

function movieSplit (movies, splitIndex) {
    let splitArr = [];
    //loop through remaining movies
    for (let i = 0; i<movies.length; i+=splitIndex) {
        //splices at each index of x40 to its own array
        let subArr = movies.slice(i, i+splitIndex);
        //pushes each of those 40ct arrays into a parent array
        splitArr.push(subArr);
    }
    console.log(splitArr);
    //loop sends each child-array to the timing function w/ timing factor
    for (let j = 0; j < splitArr.length; j++) {
        timedPrint(splitArr[j], (j + 1));
    }
}

function bundleData() {
    let restMovies = [];
    // i = each movie     130: dummy data for # of total movies
    for(let i=0; i<130; i++) {
        //print first 39 movies w/actors 
        //// 1 call (all movies) + 39 calls (each movie actors) = 40 calls
        if (i<39) {
            $("#output").append(`${i} `);
        }
        //set rest of movies to array
        else {
            restMovies.push(i);
        }
    }
    //send rest of movies to timed release function, plus number to slice array
    movieSplit(restMovies, 40);
}

// bundleData();



// let allMovies = [];

function getMoreMovies(page){
// start setTimeout for each API request
    setTimeout(function () {
        //gets API data to page# given
        model.getMovies(page)
            //prints each movies to the DOM
            .then((movieData) => 
                movieData.results.forEach(m => view.printMovie(m)));
                //sends requests in 10 sec increments
            }, 10000 * (page-1));
}


function initialMovies (firstMovies, totalPages) {
    //sorts first set of movies by popularity
    firstMovies.sort((a,b)=>b.popularity - a.popularity);
    //sends each movie to be printed to DOM
    firstMovies.forEach(i=>view.printMovie(i));
    //sends each remaining page number to setTimout function
    for (let i=2;i<(totalPages+1);i++){
        getMoreMovies(i);
    }
}

//fetches page 1 (20movies); 
//sends those movies plus total #pages
model.getMoviesInit()
    .then(movieData=>initialMovies(movieData.results, movieData.total_pages));
//     .then((initData) => moreMovies(initData.results, initData.total_pages));