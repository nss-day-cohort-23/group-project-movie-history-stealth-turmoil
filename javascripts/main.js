'use strict';
const user_controller = require('./user_controller');
let firebase = require('firebase');
let model = require('./model');
let control = require('./controller');
const cred = require('./config/fbCreds');
let fbConfig = require('./config/fbConfig');
let rateyo = require('./rateyo');
//const $ = require('jquery');



const fbURL = "https://stealth-turmoil.firebaseio.com";


$(document).ready(function() {
  
  user_controller.activateListeners();
});
rateyo.rate();