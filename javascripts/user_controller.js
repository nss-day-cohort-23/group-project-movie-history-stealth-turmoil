'use strict';
let $ = require('jquery');
let user_model = require('./user_model');
let user_view = require('./user_view');

let $txtEmail = $('#txtEmail');
let $txtPassword = $('#txtPassword');
let $btnLogin = $('#btnLogin');
let $btnSignUp = $('#btnSignUp');
let $btnLogOut = $('#btnLogOut');
let $newAccount = $('#newAccount');


  $(document).on("click", '#btnLogin', user_model.login);

  $(document).on("click", '#newAccount', user_model.newAccount);
  
  $(document).on("click", '#btnSignUp', user_model.signUp);

  $(document).on("click", '#btnLogOut', user_model.logOut);

  $('#showList').on("click", user_model.postWatchlist);

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

$(document).on("click", "#accountLoad", function() {
  console.log("clicked");
  $("#formPrompt").empty();
  user_view.userSignUp();
  // module.exports.activateListeners();
});
