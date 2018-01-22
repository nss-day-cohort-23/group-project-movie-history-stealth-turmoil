'use strict';
let $ = require('jquery');
let user_model = require('./user_model');

let $txtEmail = $('#txtEmail');
let $txtPassword = $('#txtPassword');
let $btnLogin = $('#btnLogin');
let $btnSignUp = $('#btnSignUp');
let $btnLogOut = $('#btnLogOut');
let $newAccount = $('#newAccount');

module.exports.activateListeners = () =>{
  $btnLogin.click(user_model.login);

  $newAccount.click(user_model.newAccount);
  
  $btnSignUp.click(user_model.signUp);

  $btnLogOut.click(user_model.logOut);

};
