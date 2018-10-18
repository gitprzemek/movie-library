'use strict'

let movieList = new XMLHttpRequest();
let movieObj;
let movieResult;

const poster = document.getElementsByClassName("movie-container__img");
const rating = document.getElementsByClassName("movie-container__percent");
const title = document.getElementsByClassName("movie-container__title");
const dateMovie = document.getElementsByClassName("movie-container__date");
const about = document.getElementsByClassName("movie-container__text");

movieList.open("GET", "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=642874b006093ef1d8becb7a5a90179c", true);
movieList.responseType = "text";
movieList.send(null);



movieList.onload = function(){
    // class movieTemp {
    //     constructor(id, original_title){
    //         let overview, poster_path, release_date, title, vote_average;
    //         this.id = id;
    //         this.original_title = original_title;
    //         this.overview = overview;
    //         this.poster_path = poster_path;
    //         this.release_date = release_date;
    //         this.title = title;
    //         this.vote_average = vote_average;
    
    //     }
    // }
    function movieCard(movie){
        return `
        <div class="movie-container">
            <img src="http://image.tmdb.org/t/p/w185/${movie.poster_path}" alt="movie-image" class="movie-container__img">
            <div class="movie-container__about">
                <span class="movie-container__percent">${movie.vote_average}</span>
                <h2 class="movie-container__title">${movie.original_title}</h2>
                <p class="movie-container__date">${movie.release_date}</p>
                <p class="movie-container__text" id="xxx">${movie.overview}</p>
                <span class="movie-container__star"><input type="checkbox" class="ss"></span>
            </div>
        </div>
        
        `
    }
    if (movieList.status === 200){
        movieObj = JSON.parse(movieList.responseText);
        movieResult = movieObj.results;
        document.getElementById("movie-section").innerHTML = `${movieResult.map(movieCard).join("")}`;
        console.log(movieObj);
        console.log(movieResult);
    }
    // MAX LENGHT TEXT IN CONTAINER ABOUT
    let i;
    const maxText = document.getElementsByClassName("movie-container__text");
    for (i = 0; i < maxText.length; i++) {
        if (maxText[i].className == "movie-container__text") {
            maxText[i].innerHTML = maxText[i].innerHTML.substring(0, 210) + '<span>...</span>';
        }
    }
}





// CANVAS

// function canvasOne(){
//     let canvas = document.getElementById("canvas1");

    
        
//         let triangle = canvas.getContext("2d");
//         triangle.beginPath();
//         triangle.moveTo(0, 0);
//         triangle.lineTo(100,150);
//         triangle.lineTo(0,300);
//         triangle.closePath();
//         triangle.strokeStyle = "#FF0000";
//         triangle.stroke();
        
    
    
// }
// canvasOne();