

let movieList = new XMLHttpRequest();
let movieSearch = new XMLHttpRequest();
let movieObj;
let movieResult;
let searchObj;
let searchResult;


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
        movieObj = JSON.parse(movieList.responseText);
        movieResult = movieObj.results;
        document.getElementById("movie-section").innerHTML = `${movieResult.map(movieCard).join("")}`;
    }
    shortText(); 
}
// NEW REQUEST FOR SEARCH AFTER CLICK BUTTON


const btnSearch = document.getElementById("search-form__btn");
btnSearch.addEventListener("click", function(){
    // REQ FOR SEARCH
    let inputSearch = document.getElementById("search-form__input").value;
    movieSearch.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=642874b006093ef1d8becb7a5a90179c&query="+inputSearch+"&page=1", true);
    movieSearch.responseType = "text";
    movieSearch.onload = function(){
        if (movieSearch.status === 200){
            searchObj = JSON.parse(movieSearch.responseText);
            searchResult = searchObj.results;
            console.log(searchObj)
            console.log(searchObj.page);

            document.getElementById("movie-section").innerHTML = `${searchResult.map(movieCard).join("")}`;
        }
        shortText();
    }
    movieSearch.send(null);

})


    


        let inputSearch = document.getElementById("search-form__input").value;
        const btnNext = document.getElementById("nextBtn");
        const btnPrev = document.getElementById("prevBtn");

        var currentPage = 1;
        var maxPages = searchObj.total_pages;
        function prevPage() {
            if (currentPage > 1) {
                currentPage--;
                changePage(currentPage);
            }
        }

        function nextPage() {
            if (currentPage < maxPages) {
                currentPage++;
                changePage(currentPage);
            }
        }
        function changePage(page){
            movieSearch.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=642874b006093ef1d8becb7a5a90179c&query=" + inputSearch + "&page="+ ++page +'"', true);
        movieSearch.responseType = "text";
        movieSearch.onload = function () {
            if (movieSearch.status === 200) {
                searchObj = JSON.parse(movieSearch.responseText);
                searchResult = searchObj.results;
                console.log(searchObj)
                console.log(searchObj.page);

                document.getElementById("movie-section").innerHTML = `${searchResult.map(movieCard).join("")}`;
            }
            shortText();
        }
        movieSearch.send(null);
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
    }
    btnNext.addEventListener("click", nextPage());    
        



        // for(let i = 1; i < page.total_pages; i++){
            
        //     document.getElementById("movie-section").innerHTML = `${searchResult.map(movieCard).join("")}`;
        //     return page.page[i];
        // }
        
    



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
    ]; // Can be obtained from another source, such as your objJson variable
    
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