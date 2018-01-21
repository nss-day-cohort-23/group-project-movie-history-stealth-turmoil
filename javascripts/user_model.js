'use strict';

const firebase = require("./config/fbConfig");
const cred = require('./config/fbCreds');
const $ = require('jquery');
require("firebase/auth");
let auth = firebase.auth();
let $errorArea = $('#errorArea');
let $txtEmail = $('#txtEmail');
let $txtPassword = $('#txtPassword');


module.exports.login = () =>{
$errorArea.empty();
    let email = $('#txtEmail').val();
    let pass = $('#txtPassword').val();

    auth.signInWithEmailAndPassword(email, pass)
    .catch(function (error) {
      authError(error);
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
    authError(error);
  });
};
module.exports.logOut = () => {
    auth.signOut();
};

auth.onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    $('#main-div').addClass('hidden');
    $('#btnLogOut').removeClass('hidden');
  } else {
    console.log('not logged in');
    $('#btnLogOut').addClass('hidden');
    $('#main-div').removeClass('hidden');

  }
});

function authError(error) {
  console.log(error.message);
  let errMessage = error.message;
  switch (errMessage) {
    case 'The email address is badly formatted.':
      if ($txtEmail.val() == '') {
        $errorArea.html('You must enter your Email Address');
      } else if ($txtPassword.val() == '') {
        $errorArea.html('You must enter a password');
      } else {
        $errorArea.html('This email is not acceptable, please enter a real email');
      }
      break;
    case 'The password must be 6 characters long or more.':
      $errorArea.html(error);
      break;
    case 'The email address is already in use by another account.':
      $errorArea.html('There is already an account associated with this email address.');
      break;
    case 'The password is invalid or the user does not have a password.':
    $errorArea.html('The password you entered is incorrect, please try again');
      break;
  }
}

