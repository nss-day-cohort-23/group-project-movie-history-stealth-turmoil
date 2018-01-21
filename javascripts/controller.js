'use strict';

const $ = require('jquery');

function timedPrint(movies, time){
    //within a certain time frame...
    setTimeout(function(){
        //prints each movie of sub array to the DOM
        movies.forEach(m => $("#output").append(`${m} `));
    }, 3000 * time);
}

function movieSplit (movies, splitCount) {
    let splitArr = [];
    //loop through remaining movies
    for (let i = 0; i<movies.length; i+=splitCount) {
        //splices each count of 40 to its own array
        let subArr = movies.slice(i, i+splitCount);
        //pushes each of those 40ct arrays into a parent array
        splitArr.push(subArr);
    }
    //loop sends each child-array to the timing function w/ timing factor
    for (let j = 0; j < splitArr.length; j++) {
        timedPrint(splitArr[j], (j + 1));
    }
}

function splitData() {
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

splitData();