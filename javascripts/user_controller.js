'use strict';
// let $ = require('jquery');
let user_model = require('./user_model');
let user_view = require('./user_view');

let $txtEmail = $('#txtEmail');
let $txtPassword = $('#txtPassword');
let $btnLogin = $('#btnLogin');
let $btnSignUp = $('#btnSignUp');
let $btnLogOut = $('#btnLogOut');
let $newAccount = $('#newAccount');

module.exports.activateListeners =() =>{
  $(document).on("click", '#btnLogin', user_model.login);

  $(document).on("click", '#newAccount', user_model.newAccount);
  
  $(document).on("click", '#btnSignUp', user_model.signUp);

  $(document).on("click", '#btnLogOut', user_model.logOut);

  $('#showList').on("click", user_model.postWatchlist);

  $('#watchedList').on("click",function(){
    console.log(" watched list click");
  });


};

$(document).on('click', ".addMovie", function() {
  let movieId =  this.id;
  let movieTitle = $(this).siblings('.title').html();
  let movieDate = $(this).siblings('.date').html();
  let movieCast = $(this).siblings('.cast').html();
  let movieImg = $(this).siblings('.image')[0].src;
  

  // $(document).on('click', ".addMovie", function() {
  //   let movieId =  this.id;
  //   user_model.getWatchList().then(movieList =>{
  //     //this is like 90% done. validate movie for uniqueness, only add to watchlist if movie doesn't already exist in watchlist.
  //     //Beware break doesn't actually work for a foreach, you'll have to do somethign else
  //     //you'll have to add finish this conditional, only create the movie obj when it is false
  //    let watchListData = user_model.showWatchlist(movieList);
  //     watchListData.forEach((movie)=>{
  //       console.log("FOR EACH", "movieID", movieId,"movie.movieId",movie.movieId);
  //       if(movieId == movie.movieId){
  //         console.log("IF STATEMENT WORKING");
  //         window.alert('You have already added this movie. ');
  //         // break;
  //       } 
  //     });
  //   });
  // });

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
  module.exports.activateListeners(); //this was commented out?? -cb
});
