let movieList = new XMLHttpRequest();
let movieSearch = new XMLHttpRequest();
let movieObj;
let movieResult;
let searchObj;
let searchResult;
function popular() {
    fetch("https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=642874b006093ef1d8becb7a5a90179c")
        .then(resp => resp.json())
        .then(resp => {
            movieResult = resp.results;
            document.getElementById("movie-section").innerHTML = `${movieResult.map(movieCard).join("")}`;

            shortText();

        });
}
popular();

// NAVIGATION CLOSE/OPEN
const openBtn = document.getElementById("navBtnOpen");
const closeBtn = document.getElementById("navBtnClose");
const navList = document.getElementById("navList");
/* Open */
function openNav() {
    navList.style.height = "100vh";
}
/* Close */
function closeNav() {
    navList.style.height = "0vh";
}

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);







// CARD TEMPLATE HTML
function movieCard(movie) {
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
function shortText() {
    const maxText = document.getElementsByClassName("movie-container__text");
    for (let i = 0; i < maxText.length; i++) {
        if (maxText[i].className == "movie-container__text") {
            maxText[i].innerHTML = maxText[i].innerHTML.substring(0, 210) + '<span>...</span>';
        }
    }
}
// NEW REQUEST FOR SEARCH AFTER CLICK BUTTON


const btnSearch = document.getElementById("search-form__btn");
btnSearch.addEventListener("click", function () {
    // REQ FOR SEARCH
    let inputSearch = document.getElementById("search-form__input").value;
    fetch("https://api.themoviedb.org/3/search/movie?api_key=642874b006093ef1d8becb7a5a90179c&query=" + inputSearch + "&page=1")
        .then(resp => resp.json())
        .then(resp => {
            searchResult = resp.results;
            document.getElementById("movie-section").innerHTML = `${searchResult.map(movieCard).join("")}`;

            shortText();

        });

});



// PAGINATION SITES


const btnNext = document.getElementById("nextBtn");
const btnPrev = document.getElementById("prevBtn");

let currentPage = 1;

let maxlenght;


function changePage(page) {
    let inputSearch = document.getElementById("search-form__input").value;
    fetch("https://api.themoviedb.org/3/search/movie?api_key=642874b006093ef1d8becb7a5a90179c&query=" + inputSearch + "&page=" + page + "")
        .then(resp => resp.json())

        .then(resp => {

            searchResult = resp.results;
            // var maxPages = resp.total_pages;
            // console.log(searchResult);
            // console.log(resp.page);
            // console.log(resp.total_pages);
            // console.log(resp);
            // let maxPage = 
            maxlenght = resp.total_pages;

            document.getElementById("movie-section").innerHTML = `${searchResult.map(movieCard).join("")}`;
            
            shortText();
            // getLenght(resp);
            // const promise1 = new Promise(function(resolve, reject) {
            //     resolve
            //   });
            return maxlenght;
        });
        // let lenght = function getLenght(resp){
        //     // console.log(resp.total_pages)
        //     return resp.total_pages;
        // };
        return maxlenght;
        console.log("p "+maxlenght);
};
// let lenght = changePage().then(function(resp){
//     console.log(resp.total_pages);
//     return resp.total_pages;
// });
// let lenght = function getLenght(resp){
//     // console.log(resp.total_pages)
//     return resp.total_pages;
// };
console.log("drigi "+maxlenght);
// function getLenght(resp){
//     resp.total_pages;
//     console.log(resp.total_pages);
// }
// console.log(getLeanght());


function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        changePage(currentPage);
    }
}

function nextPage() {
    if (currentPage < 5) {
        currentPage++;
        changePage(currentPage);
        console.log(currentPage);
        // console.log(lenght);
    }
}

btnNext.addEventListener("click", nextPage);
btnPrev.addEventListener("click", prevPage);


/*
function LoadNew(page) {
    
    fetch("https://api.themoviedb.org/3/search/movie?api_key=642874b006093ef1d8becb7a5a90179c&query=" + inputSearch + "&page=" + page + "")
        .then(resp => resp.json())

        .then(resp => {

            searchResult = resp.results;
            // var maxPages = resp.total_pages;
            console.log(searchResult);
            console.log(resp.page);
            console.log(resp.total_pages);
            console.log(resp);
            // let maxPage = 

            document.getElementById("movie-section").innerHTML = `${searchResult.map(movieCard).join("")}`;

            shortText();

        });
}
btnPrev.addEventListener("click", prevPage);


*/


























        // var btn_next = document.getElementById("btn_next");
        // var btn_prev = document.getElementById("btn_prev");
        // var listing_table = document.getElementById("listingTable");
        // var page_span = document.getElementById("page");
     
        // Validate page
        // if (page < 1) page = 1;
        // if (page > numPages()) page = numPages();
    
        // listing_table.innerHTML = "";
    
        // for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
        //     listing_table.innerHTML += objJson[i].adName + "<br>";
        // }
        // page_span.innerHTML = page + "/" + numPages();
    
        // if (page == 1) {
        //     btn_prev.style.visibility = "hidden";
        // } else {
        //     btn_prev.style.visibility = "visible";
        // }
    
        // if (page == numPages()) {
        //     btn_next.style.visibility = "hidden";
        // } else {
        //     btn_next.style.visibility = "visible";
        // }
    
    // btnNext.addEventListener("click", nextPage());    
        



        // for(let i = 1; i < page.total_pages; i++){
            
        //     document.getElementById("movie-section").innerHTML = `${searchResult.map(movieCard).join("")}`;
        //     return page.page[i];
        // }
        
    

/*

    var current_page = 1;
    var records_per_page = 3;
    
    var objJson = [
        { adName: "AdName 1"},
        { adName: "AdName 2"},
        { adName: "AdName 3"},
        { adName: "AdName 4"},
        { adName: "AdName 5"},
        { adName: "AdName 6"},
        { adName: "AdName 7"},
        { adName: "AdName 8"},
        { adName: "AdName 9"},
        { adName: "AdName 10"}
    ]; 
    
    function prevPage()
    {
        if (current_page > 1) {
            current_page--;
            changePage(current_page);
        }
    }
    
    function nextPage()
    {
        if (current_page < numPages()) {
            current_page++;
            changePage(current_page);
        }
    }
        
    function changePage(page)
    {
        var btn_next = document.getElementById("btn_next");
        var btn_prev = document.getElementById("btn_prev");
        var listing_table = document.getElementById("listingTable");
        var page_span = document.getElementById("page");
     
        // Validate page
        if (page < 1) page = 1;
        if (page > numPages()) page = numPages();
    
        listing_table.innerHTML = "";
    
        for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
            listing_table.innerHTML += objJson[i].adName + "<br>";
        }
        page_span.innerHTML = page + "/" + numPages();
    
        if (page == 1) {
            btn_prev.style.visibility = "hidden";
        } else {
            btn_prev.style.visibility = "visible";
        }
    
        if (page == numPages()) {
            btn_next.style.visibility = "hidden";
        } else {
            btn_next.style.visibility = "visible";
        }
    }
    
    function numPages()
    {
        return Math.ceil(objJson.length / records_per_page);
    }
    
    window.onload = function() {
        changePage(1);
    }; 
    */
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