'use strict';

let firebase = require('firebase');
let model = require('./model');
let control = require('./controller');
// const $ = require("jquery");

module.exports.printMovie = (movie, cast) => {
    if (movie.poster_path !== null) {
        $("#output").append(
            `<div class="movieCard" id="${movie.id}">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                <h3 class="display-4">${movie.title} (${movie.release_date.slice(0,4)})</h3>
                <p><strong>Cast:</strong> ${cast[0].name}, ${cast[1].name}, ${cast[2].name}</p>
            </div>`);
    } else {
        $("#output").append(
            `<div class="movieCard" id="${movie.id}">
                <img src="../images/no-poster.png">
                <h3 class="display-4">${movie.title} (${movie.release_date.slice(0, 4)})</h3>
                <p><strong>Cast:</strong> ${cast[0].name}, ${cast[1].name}, ${cast[2].name}</p>
            </div>`);
    }
};

module.exports.printTopMovies = (movies) => {
    $("#output").append(`
        <div class="jumbotron">
        <p class="lead">Welcome to...</p>
        <h1 class="display-3">Stealthy Turmoil!</h1>
        <p class="lead">A movie search engine designed to divert all feelings of impending doom & help procrastinate on really important tasks!</p>
        <hr class="my-4">
            <p>To see more movie details (like cast members or cast members) or make a confusing list of movies you can't see: please create an account</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" id="createLogin" role="button">Create Account</a>
            </p>
        </div>`);
    $("#output").append(`<h1 class="display-4" id="topTitle">Movies people watch....</h1><br>`);
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