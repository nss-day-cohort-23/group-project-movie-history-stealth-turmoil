'use strict';

let firebase = require('firebase');
let model = require('./model');
let control = require('./controller');
const $ = require("jquery");

module.exports.printMovie = (movie) => {
    $("#output").append(
        `<div class="movieCard" id="${movie.id}">
            <h3>${movie.title} (${movie.release_date.slice(0,4)})<h3>
        </div>`);
};