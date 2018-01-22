'use strict';

const $ = require('jquery');
const firebase = require("./config/fbConfig");
const cred = require('./config/fbCreds');

require("firebase/auth");


module.exports.getMovies = (i) => {
    return new Promise(function (resolve, reject) {
        $.ajax({
            "url": `https://api.themoviedb.org/3/search/movie?include_adult=false&query=%27war%27&page=${i}&language=en-US&api_key=b7770e2d95281d16626611ba20512744`
        })
        .done((initData) => {
            resolve(initData);
        });
    });
};

module.exports.getMoviesInit = () => {
    return new Promise(function (resolve, reject) {
        $.ajax({
            "url": "https://api.themoviedb.org/3/search/movie?include_adult=false&query=%27war%27&language=en-US&api_key=b7770e2d95281d16626611ba20512744"
        })
        .done((initData) => {
            resolve(initData);
        });
    });
};

module.exports.fbAccount = () => {

    // I had to comment this out for it to work. I am not sure why???
    //firebase.initializeApp(config);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogOut');

  btnLogin.addEventListener('click', e => {
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
  });

  btnSignUp.addEventListener('click', e=> {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  btnLogout.addEventListener('click', e => {
      firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
          console.log(firebaseUser);
            btnLogout.classList.remove('hide');

      } else {
          console.log('not logged in');
          btnLogout.classList.add('hide');
      }
  });
};