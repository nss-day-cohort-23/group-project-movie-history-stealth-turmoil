'use strict';

let firebase = require('firebase');
let model = require('./model');
let control = require('./controller');
const cred = require('./config/fbCreds');
let fbConfig = require('./config/fbConfig');

const fbURL = "https://stealth-turmoil.firebaseio.com";
const $ = require("jquery");

