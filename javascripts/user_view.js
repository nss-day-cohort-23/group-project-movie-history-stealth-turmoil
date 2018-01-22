'use strict';
let $ = require('jquery');
let $errorArea = $('#errorArea');
let $txtEmail = $('#txtEmail');
let $txtPassword = $('#txtPassword');

module.exports.authError= (error)=> {

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

};