'use strict';

const fbCreds = require("./fbCreds");

const firebase = require("firebase/app");
require("firebase/auth");

let config = {
  apiKey: fbCreds.apiKey,
  authDomain: fbCreds.authDomain
};

firebase.initializeApp(config);

module.exports = firebase;
