'use strict';

const firebase = require("./config/fbConfig");
const cred = require('./config/fbCreds');
const $ = require('jquery');
require("firebase/auth");



let  $txtEmail = $('#txtEmail');
let  $txtPassword = $('#txtPassword');
let  $btnLogin = $('#btnLogin');
let  $btnSignUp = $('#btnSignUp');
let  $btnLogOut = $('#btnLogOut');
let $errorArea = $('#errorArea');



(function setListeners() {

  // I had to comment this out for it to work. I am not sure why???
  //firebase.initializeApp(config);

  $btnLogin.on('click', e => {
    $errorArea.empty();
    let email = $txtEmail.val();
    let pass = $txtPassword.val();
    let auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(function(error){
      authError(error);
    });
  });

  $btnSignUp.on('click', e => {
    $errorArea.empty();
    const email = $txtEmail.val();
    const pass = $txtPassword.val();
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(function(error){
      authError(error);
    });
  });

  $btnLogOut.on('click', e => {
    console.log('click');
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      // window.alert(`Welcome ${firebas eUser.email}`);
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

function authError(error) {
  console.log(error.message);
  let errMessage = error.message;
  switch (errMessage) {
    case 'The email address is badly formatted.':
      if($txtEmail.val() ==''){
        $errorArea.html('You must enter your Email Address');
      }else if($txtPassword.val() == ''){
        $errorArea.html('You must enter a password');
      }else{
        $errorArea.html('This email is not acceptable, please enter a real email');
      }
      break;
    case 'The password must be 6 characters long or more.':
      $errorArea.html(error);
  }
}