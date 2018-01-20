'use strict';

const firebase = require("./config/fbConfig");
const cred = require('./config/fbCreds');
const $ = require('jquery');

require("firebase/auth");

(function doTheThing() {


  // I had to comment this out for it to work. I am not sure why???
  //firebase.initializeApp(config);

  const $txtEmail = $('#txtEmail');
  const $txtPassword = $('#txtPassword');
  const $btnLogin = $('#btnLogin');
  const $btnSignUp = $('#btnSignUp');
  const $btnLogOut = $('#btnLogOut');


  $btnLogin.on('click', e => {
    const email = $txtEmail.val();
    const pass = $txtPassword.val();
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  $btnSignUp.on('click', e => {
    const email = $txtEmail.val();
    const pass = $txtPassword.val();
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    // promise.catch(authError(error));
  });

  $btnLogOut.on('click', e => {
    console.log('click');
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      // window.alert(`Welcome ${firebaseUser.email}`);
      console.log(firebaseUser.email);
      $('#main-div').addClass('hidden');
      $btnLogOut.removeClass('hidden');


    } else {
      console.log('not logged in');
      $btnLogOut.addClass('hidden');
      $('#main-div').removeClass('hidden');

    }
  });

}());

// function authError(error){
//   console.log(error);
//   console.log('here now');
// if(error.message =='The email address is badly formatted'){
//   $('#txtEmail').val('This email is not acceptable, please enter a real email');
// }

// }