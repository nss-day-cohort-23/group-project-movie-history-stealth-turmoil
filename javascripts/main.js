'use strict';
const user_controller = require('./user_controller');
let firebase = require('firebase');
let movie_model = require('./movie_model');
let movie_control = require('./movie_controller');
const user_control = require('./user_controller');
const cred = require('./config/fbCreds');
let fbConfig = require('./config/fbConfig');
let rateyo = require('./rateyo');
// const $ = require('jquery');
const fbURL = "https://stealth-turmoil.firebaseio.com";



// $(document).ready(function() {
//   user_controller.activateListeners();
// });

$(document).ready(function() {
  user_controller.activateListeners();
});
rateyo.rate();


