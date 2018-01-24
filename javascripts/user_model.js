'use strict';

const firebase = require("./config/fbConfig");
const cred = require('./config/fbCreds');
// const $ = require('jquery');
let user_view = require('./user_view');
require("firebase/auth");
let auth = firebase.auth();
let $errorArea = $('#errorArea');
let $txtEmail = $('#txtEmail');
let $txtPassword = $('#txtPassword');
let currentUser;
let fbUrl = 'https://stealth-turmoil.firebaseio.com/';
module.exports.login = () => {
  $errorArea.empty();
  let email = $('#txtEmail').val();
  let pass = $('#txtPassword').val();

  auth.signInWithEmailAndPassword($('#txtEmail').val(), $('#txtPassword').val())
    .then(() => user_view.searchBar())
    .catch(function (error) {
      user_view.authError(error);
    });
};

module.exports.newAccount = () => {
  $('.login').addClass('hidden');
  $('.signup').removeClass('hidden');
};

module.exports.signUp = () => {
  $errorArea.empty();
  const email = $txtEmail.val();
  const pass = $txtPassword.val();

  auth.createUserWithEmailAndPassword($('#txtEmail').val(), $('#txtPassword').val())
    .then(authData => {
      let $userName = $('#userName').val();
      firebase.database().ref("users").child(authData.uid).set({ name: $userName, email: authData.email });
      window.alert(`Welcome ${$userName}`);
      user_view.searchBar();
    })
    .catch(function (error) {
      user_view.authError(error);
    });
};

module.exports.logOut = () => {
  auth.signOut();
};

auth.onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    $('#main-div').addClass('hidden');
    $('#btnLogOut').removeClass('hidden');
    currentUser = firebase.auth().currentUser;

  } else {
    console.log('not logged in');
    $('#btnLogOut').addClass('hidden');
    $('#main-div').removeClass('hidden');

  }
});





module.exports.addMovie = (movieData) => {
  let id = currentUser.uid;
  movieData.uid = currentUser.uid;
  console.log(movieData, 'data');
  return new Promise((resolve, reject) => {
    $.ajax({
      url: fbUrl + `users/${id}/watchlist.json`,
      method: "POST",
      data: JSON.stringify(movieData)
    }).done(data => {
      console.log('please work!');
    });
  });
};

module.exports.addMovieRating = (rating, movieObjKey) => {
  let id = currentUser.uid;
  // movieData.uid = currentUser.uid;
  console.log(rating, 'rating');
  return new Promise((resolve, reject) => {
    $.ajax({
      url: fbUrl + `users/${id}/watchlist/${movieObjKey}/rating.json`,
      method: "PUT",
      data: JSON.stringify(rating)
    }).done(data => {
      console.log('add movie rating patch');
    });
  });
};


function getWatchList() {
  let id = currentUser.uid;
  return new Promise((resolve, reject) => {
    console.log("ID", id);
    $.ajax({
      url: fbUrl + `users/${id}/watchlist.json`,
    }).done(movieList => {
      resolve(movieList);
      console.log("movie List", movieList);
    });
  });
}
module.exports.postWatchlist = () => {
  console.log("getWatchList", getWatchList());
  getWatchList().then(movieList => {
    showWatchlist(movieList);
    console.log("POST WATCH LIST RUNNING");
  });
};

function showWatchlist(movieList) {
  let listArray = [];
  let keys = Object.keys(movieList);
  keys.forEach(key => {
    movieList[key].id = key;
    listArray.push(movieList[key]);
  });
  console.log("list array", listArray);
  user_view.printWatchList(listArray);

  // user_view.printWatchedList();
}


