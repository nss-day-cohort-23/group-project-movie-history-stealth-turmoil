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

  $('#showList').click(function(){
  user_model.getWatchList().then(movieList =>{
    user_model.showWatchlist(movieList);

  });
});

};
$(document).on('click', ".addMovie", function() {
  let movieId =  this.id;


  user_model.getWatchList().then(movieList =>{

    //this is like 90% done. validate movie for uniqueness, only add to watchlist if movie doesn't already exist in watchlist.
    //Beware break doesn't actually work for a foreach, you'll have to do somethign else
    //you'll have to add finish this conditional, only create the movie obj when it is false
   let watchListData = user_model.showWatchlist(movieList);
    watchListData.forEach((movie)=>{
      if(movieId == movie.movieId){
        window.alert('You have already added this movie. ');
        // break;
      } 
  });
});

  let movieObj ={ 
    movieId: this.id

  };
  user_model.addMovie(movieObj);

  
});
