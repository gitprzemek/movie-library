

let movieList = new XMLHttpRequest();
let movieSearch = new XMLHttpRequest();
let movieObj;
let movieResult;
let searchObj;
let searchResult;


// const poster = document.getElementsByClassName("movie-container__img");
// const rating = document.getElementsByClassName("movie-container__percent");
// const title = document.getElementsByClassName("movie-container__title");
// const dateMovie = document.getElementsByClassName("movie-container__date");
// const about = document.getElementsByClassName("movie-container__text");

movieList.open("GET", "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=642874b006093ef1d8becb7a5a90179c", true);
movieList.responseType = "text";
movieList.send(null);
console.log(movieList.status);

// CARD TEMPLATE HTML
function movieCard(movie){
    return `
    <div class="movie-container">
        <img src="http://image.tmdb.org/t/p/w185/${movie.poster_path}" alt="NO PHOTO" class="movie-container__img">
        <div class="movie-container__about">
            <span class="movie-container__percent">${movie.vote_average}</span>
            <h2 class="movie-container__title">${movie.original_title}</h2>
            <p class="movie-container__date">${movie.release_date}</p>
            <p class="movie-container__text">${movie.overview}</p>
            <span class="movie-container__star"><input type="checkbox" class="ss"></span>
        </div>
    </div>
    `
}
// MAX LENGHT TEXT IN CONTAINER ABOUT
function shortText(){
    const maxText = document.getElementsByClassName("movie-container__text");
    for (let i = 0; i < maxText.length; i++) {
        if (maxText[i].className == "movie-container__text") {
            maxText[i].innerHTML = maxText[i].innerHTML.substring(0, 210) + '<span>...</span>';
        }
    } 
}

movieList.onload = function(){
    if (movieList.status === 200){
        console.log(movieList.status);
        movieObj = JSON.parse(movieList.responseText);
        movieResult = movieObj.results;
        document.getElementById("movie-section").innerHTML = `${movieResult.map(movieCard).join("")}`;
        console.log(movieObj);
        console.log(movieResult);
    }
    shortText(); 
}
// NEW REQUEST FOR SEARCH AFTER CLICK BUTTON


const btnSearch = document.getElementById("search-form__btn");
btnSearch.addEventListener("click", function(){
    // REQ FOR SEARCH
    let inputSearch = document.getElementById("search-form__input").value;
    movieSearch.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=642874b006093ef1d8becb7a5a90179c&query="+inputSearch+'"', true);
    movieSearch.responseType = "text";
    movieSearch.onload = function(){
        if (movieSearch.status === 200){
            console.log(movieSearch.status);
            searchObj = JSON.parse(movieSearch.responseText);
            searchResult = searchObj.results;
            console.log(inputSearch)
            document.getElementById("movie-section").innerHTML = `${searchResult.map(movieCard).join("")}`;
            console.log(searchObj);
            console.log(searchResult);
        }
        shortText();
    }
    movieSearch.send(null);

})

const btnNext = document.getElementById("nextBtn");
btnNext.addEventListener("click", function(page){
    for(let i = 0; i < page.total_pages; i++){
        return page.page[i];
    }
})




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