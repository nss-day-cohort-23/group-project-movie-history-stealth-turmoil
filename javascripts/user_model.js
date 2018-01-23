'use strict';

const firebase = require("./config/fbConfig");
const cred = require('./config/fbCreds');
const $ = require('jquery');
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

  auth.signInWithEmailAndPassword(email, pass)
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

  auth.createUserWithEmailAndPassword(email, pass)
    .then(authData => {
      let $userName = $('#userName').val();
      firebase.database().ref("users").child(authData.uid).set({ name: $userName, email: authData.email });
      window.alert(`Welcome ${$userName}`);
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
  let uid = currentUser.uid;
  movieData.uid = currentUser.uid;
  console.log(movieData, 'data');
  return new Promise((resolve, reject) => {
    $.ajax({
      url: fbUrl + `watchlist.json`,
      method: "POST",
      data: JSON.stringify(movieData)
    }).done(data => {
      console.log('please work!');
    });
  });
};


function getWatchList() {
  let uid = currentUser.uid;
  // console.log(id, 'id');
  return new Promise((resolve, reject) => {
    $.ajax({
      url: fbUrl + `watchlist.json?orderBy="uid"&equalTo="${uid}"`

    }).done(movieList => {
      resolve(movieList);
    });
  });
}
module.exports.postWatchlist = (uid) => {
  getWatchList().then(movieList => {
    showWatchlist(movieList);
  });
};

function showWatchlist(movieList) {
  console.log(movieList);
  let listArray = [];
  let keys = Object.keys(movieList);
  keys.forEach(key => {
    movieList[key].id = key;
    listArray.push(movieList[key]);
  });
  user_view.printWatchList(listArray);
}

