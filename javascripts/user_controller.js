'use strict';
// let $ = require('jquery');
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

  $('#showList').click(user_model.postWatchlist);
};

$(document).on('click', ".addMovie", function() {
  let movieId =  this.id;
  let movieTitle = $(this).siblings('.title').html();
  let movieDate = $(this).siblings('.date').html();
  let movieCast = $(this).siblings('.cast').html();
  let movieImg = $(this).siblings('.image')[0].src;
  
  let movieObj ={ 
    movieId: movieId,
    title: movieTitle,
    date: movieDate,
    cast: movieCast,
    img: movieImg
  };
  user_model.addMovie(movieObj);

  
});
