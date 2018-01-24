'use strict';

// const $ = require('jquery');

module.exports.getTopMovies = () => {
    return new Promise(function (resolve, reject) {
        $.ajax({
            'url': 'https://api.themoviedb.org/3/movie/top_rated?api_key=5d0e04db35c01aaf8be4d1fc3f7e47c6&language=en-US&page=1'
        })
            .done((topMovies) => {
                resolve(topMovies);
            });
    });
};

module.exports.getCast = (movieID) => {
    return new Promise(function (resolve, reject) {
        $.ajax({
            "url": `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=5d0e04db35c01aaf8be4d1fc3f7e47c6`
        })
            .done((castData) => {
                resolve(castData);

            });
    });
};

module.exports.getMovies = (i, searchVal) => {
    return new Promise(function (resolve, reject) {
        $.ajax({

            url: `https://api.themoviedb.org/3/search/movie?include_adult=false&query=%27${searchVal}%27&page=${i}&language=en-US&api_key=5d0e04db35c01aaf8be4d1fc3f7e47c6`


 


        })
        .done((movieData) => {
            resolve(movieData);
        });
    });
};

module.exports.getMoviesInit = (searchVal) => {
    return new Promise(function (resolve, reject) {
        $.ajax({


            url: `https://api.themoviedb.org/3/search/movie?include_adult=false&query=%27${searchVal}%27&language=en-US&api_key=5d0e04db35c01aaf8be4d1fc3f7e47c6`


        })
        .done((initData) => {
            resolve(initData);
        });
    });
};


// module.exports.addRating = () => {
//     let uid = currentUser.uid;
//     return new Promise(function (resolve,reject){
//     //getwatchlists(
//         $.ajax({
//             url: "https://stealth-turmoil.firebaseio.com/watchlist.json",
//         })
//         .done((myMovies) => {
//             resolve(myMovies);
//         });
//     .then({
//       if( movie.id === $(this)){

      
//         $.ajax({
//             url: fbUrl + `users/${id}/watchlist.json`,
//             method: "POST",
//             data:  movie.rating === this.rating
//         }).done(data => {
//             resolve (myMovies);
//         });
//     }
//   });
    //movie rating update (rating number);
//user id === current id

//movie id === movie id of click



