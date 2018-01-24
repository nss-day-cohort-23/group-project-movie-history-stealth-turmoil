'use strict';
// let $ = require('jquery');
let $errorArea = $('#errorArea');
let $txtEmail = $('#txtEmail');
let $txtPassword = $('#txtPassword');
let rateyo = require("./rateyo");

module.exports.printWatchList = (listArray) =>{

  console.log("list array in output", listArray);
  $("#output").empty();
  listArray.forEach(movie =>{
  $("#output").append(
    `<div class="movieCard">
      <img class='image'src=${movie.img}>
      <h3 class='title'>${movie.title}</h3>
       <h3 class='date'>${movie.date}</h3>
      <p class='cast'>${movie.cast}</p>
      <div class="rate" id="${movie.id}"></div></div>`);
      rateyo.rate();
    
  });
};

// module.exports.printWatchedList = (listArray) =>{
//   $("#output").empty();
//   listArray.forEach(movie =>{
//   $("#output").append(
//     `<div class="movieCard">
//       <img class='image'src=${movie.img}>
//       <h3 class='title'>${movie.title}</h3>
//        <h3 class='date'>${movie.date}</h3>
//       <p class='cast'>${movie.cast}</p>
//       <div class="rate" id="#${movie.id}Rate"></div></div>`);
//       rateyo.rate();
    
//   });
// };


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

module.exports.userSignUp = () => {
  $("#formPrompt").append(`
    <div class= "main-login main-center" id = 'main-div'>
    <p id='errorArea'></p>

    <div class="form-group hidden signup" id="userBox">
      <label for="userName" class="cols-sm-2 control-label">User Name</label>
      <div class="cols-sm-10">
        <div class="input-group">
          <span class="input-group-addon">
            <i class="fa fa-user fa" aria-hidden="true"></i>
          </span>
          <input type="text" class="form-control" name="userName" id="userName" placeholder="Enter your name" />
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="txtEmail" class="cols-sm-2 control-label">Email</label>
      <div class="cols-sm-10">
        <div class="input-group">
          <span class="input-group-addon">
            <i class="fa fa-envelope fa" aria-hidden="true"></i>
          </span>
          <input type="email" class="form-control" name="email" id="txtEmail" placeholder="Enter your Email" />
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="txtPassword" class="cols-sm-2 control-label">Password</label>
      <div class="cols-sm-10">
        <div class="input-group">
          <span class="input-group-addon">
            <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
          </span>
          <input type="password" class="form-control" name="password" id="txtPassword" placeholder="Enter your Password" />
        </div>
      </div>
    </div>


    <div class="login-register">
      <button id="btnLogin" class="login-button btn-primary btn-sm btn-block login">Login</button>
      <button id="newAccount" class="login-button btn-primary btn-sm btn-block login">Create Account</button>

      <button id="btnSignUp" class="login-button btn-primary btn-sm btn-block hidden signup">Sign Up</button>

    </div>
  </div >
  `);
};

module.exports.searchBar = () => {
  $("#formPrompt").empty();
  $("#output").empty();
  $("#formPrompt").append(`<input type="text" id="movieSearch">`);
};