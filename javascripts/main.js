'use strict';
const user_controller = require('./user_controller');
let firebase = require('firebase');
let model = require('./model');
const cred = require('./config/fbCreds');
let fbConfig = require('./config/fbConfig');

const fbURL = "https://stealth-turmoil.firebaseio.com";
const $ = require("jquery");


$(document).ready(function() {
  user_controller.activateListeners();
});
