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