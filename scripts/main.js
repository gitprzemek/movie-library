'use strict'

let movieList = new XMLHttpRequest();
let movieObj;

let poster = document.getElementsByClassName("movie-container__img");
let rating = document.getElementsByClassName("movie-container__percent");
let title = document.getElementsByClassName("movie-container__title");
let dateMovie = document.getElementsByClassName("movie-container__date");
let about = document.getElementsByClassName("movie-container__text");

movieList.open("GET", "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=642874b006093ef1d8becb7a5a90179c", true);
movieList.responseType = "text";
movieList.send(null);

movieList.onload = function(){
    if (movieList.status === 200){
        movieObj = JSON.parse(movieList.responseText);
        console.log(movieObj);
        poster[0].src = "https://image.tmdb.org/t/p/w500" + movieObj.results[0].poster_path;
        console.log(movieObj.results[0].poster_path);
        console.log(poster[0]);

    }
}