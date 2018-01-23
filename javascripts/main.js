'use strict';
const user_controller = require('./user_controller');
let firebase = require('firebase');
let movie_model = require('./movie_model');
let movie_control = require('./movie_controller');
const user_control = require('./user_controller');
const cred = require('./config/fbCreds');
let fbConfig = require('./config/fbConfig');

const fbURL = "https://stealth-turmoil.firebaseio.com";
const $ = require("jquery");


// $(document).ready(function() {
//   user_controller.activateListeners();
// });
