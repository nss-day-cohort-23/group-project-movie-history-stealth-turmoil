'use strict';

let firebase = require('firebase');

let movie_model = require('./movie_model');
let movie_control = require('./movie_controller');
// const $ = require("jquery");
let rateyo = require('./rateyo');

module.exports.printMovie = (movie, cast) => {
    if (movie.poster_path !== null) {
        $("#output").append(
            `<div class="movieCard" id="${movie.id}">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                <h3>${movie.title} (${movie.release_date.slice(0,4)})</h3>
                <p><strong>Cast:</strong> ${cast[0].name}, ${cast[1].name}, ${cast[2].name}</p>
                <div class="rate" id="#${movie.id}Rate"></div></div>`);
                rateyo.rate();
    } else {
        $("#output").append(
            `<div class="movieCard" id="${movie.id}">
                <img src="../images/no-poster.png">
                <h3>${movie.title} (${movie.release_date.slice(0, 4)})</h3>
                <p><strong>Cast:</strong> ${cast[0].name}, ${cast[1].name}, ${cast[2].name}</p>
            </div>`);
            $("#${movie.id}Rate").on("click", function(){
                console.log($("this").rateYo("rating") );
            });
    }
};

// let movie_model = require('./movie_model');
let movie_control = require('./movie_controller');
let user_control = require('./user_controller');
let movieArr = [];
const $ = require("jquery");

module.exports.printMovie = (movie, cast) => {

  $("#output").append(

    `<div class="movieCard" id="${movie.id}Card">
      <img class='image'src=` + (movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
      : `../images/no-poster.png`) + `>
      <h3 class='title'>${movie.title}</h3>
       <h3 class='date'>(${movie.release_date.slice(0, 4)})</h3>
      <p class='cast'>${writeCast(cast)}</p>
      <button class='addMovie' id='${movie.id}'>Add to Watchilist</button>
      </div>`);

      };


function writeCast(cast){
  let cLength = cast.length;
  let value;
  switch(true){
    case (cLength === 0): value = '';
    break;
    case (cLength === 1): value = (cast[0].name);
    break;
    case (cLength === 2): value = ([cast[0].name, cast[1].name]);
    break;
    case (cLength > 2): value = ([cast[0].name, cast[1].name, cast[2].name]);
    } 

    return value;
  }



module.exports.printTopMovies = (movies) => {
  $("#formPrompt").append(`
        <div class="jumbotron">
        <p class="lead">Welcome to...</p>
        <h1 class="display-3">Stealthy Turmoil!</h1>
        <p class="lead">A movie search engine designed to divert all feelings of impending doom & help procrastinate on really important tasks!</p>
        <hr class="my-4">
            <p>To see more movie details (like cast members or cast members) or make a confusing list of movies you can't see: please create an account</p>
            <p class="lead" id="jumboBtns">
                <a class="btn btn-primary btn-lg" id="accountLoad" role="button">Create Account or Sign In</a>
            </p>
        </div>
        <h1 class="display-4" id="topTitle"> Movies people watch....</h1>`);
  movies.results.sort((a, b) => b.popularity - a.popularity);
  movies.results.forEach(movie => {
    if (movie.poster_path !== null) {
      $("#output").append(
        `<div class="movieCard" id="${movie.id}">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                    <h3 class="display-4">${movie.title} (${movie.release_date.slice(0, 4)})</h3>
                </div>`);
    } else {
      $("#output").append(
        `<div class="movieCard" id="${movie.id}">
                    <img src="../images/no-poster.png">
                    <h3 class="display-4">${movie.title} (${movie.release_date.slice(0, 4)})</h3>
                </div>`);
    }
  });
};

