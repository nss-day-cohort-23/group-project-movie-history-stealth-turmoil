'use strict';

let firebase = require('firebase');
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