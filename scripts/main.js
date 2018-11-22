let movieObj;
let movieResult;
let searchObj;
let searchResult;

const openBtn = document.getElementById("navBtnOpen");
const closeBtn = document.getElementById("navBtnClose");
const navList = document.getElementById("navList");
const linkList = document.getElementsByClassName("navigation__list-item");

const popularBtn = document.getElementById("popular");
const nowPlayingBtn = document.getElementById("nowPlaying");
const topRatedBtn = document.getElementById("topRated");
const upcomingBtn = document.getElementById("upcoming");

const btnSearch = document.getElementById("search-form__btn");
const inputMovies = document.getElementById("search-form__input");
// NAVIGATION CLOSE/OPEN
/* Open */
function openNav() {
    navList.classList.add("navShow");
    closeBtn.classList.add("showXBtn");
}
/* Close */
function closeNav() {
    navList.classList.remove("navShow");
    closeBtn.classList.remove("showXBtn");
}

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

// iterate links for close nav
for (i = 0; i < linkList.length; i++) {
    linkList[i].addEventListener('click', closeNav);
}

// Links in nav - load json data
popularBtn.addEventListener("click", function () {
    popular(1);
});
nowPlayingBtn.addEventListener("click", function () {
    loadNowPlaying(1);
});
topRatedBtn.addEventListener("click", function () {
    loadTopRated(1);
});
upcomingBtn.addEventListener("click", function () {
    loadUpcoming(1);
});

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
            <a href="https://www.themoviedb.org/movie/${movie.id}" class="movie-container__more">MORE</a>
        </div>
    </div>
    `
}
// buttons for pagination template
function paginationCont() {
    return `
    <button class="btns-container__btn btns-container__btn--left" id="prevBtn"><span class="fas fa-caret-left"></span></button>
            <button class="btns-container__btn btns-container__btn--right" id="nextBtn"><span class="fas fa-caret-right"></span></button>
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

// Load popular movie
popular(1);

function popular(page) {

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=642874b006093ef1d8becb7a5a90179c&page=" + page + "")
        .then(resp => resp.json())
        .then(resp => {
            movieApi = resp;
            movieResult = resp.results;
            maxLength = resp.total_pages;
            document.getElementById("movie-section").innerHTML = `${movieResult.map(movieCard).join("")}`;
            document.getElementById("btns-container").innerHTML = paginationCont();
            shortText();

            function paginationPage() {
                const btnNext = document.getElementById("nextBtn");
                const btnPrev = document.getElementById("prevBtn");

                function prevPage() {
                    if (page > 1) {
                        popular(page - 1);
                    }
                }

                function nextPage() {
                    if (page < maxLength) {
                        popular(page + 1);
                    }
                }

                btnNext.addEventListener("click", nextPage);
                btnPrev.addEventListener("click", prevPage);
            }
            paginationPage();
        });
}

// Load search movie
function searchMovie(inputSearch, page) {
    fetch("https://api.themoviedb.org/3/search/movie?api_key=642874b006093ef1d8becb7a5a90179c&query=" + inputSearch + "&page=" + page + "")
        .then(resp => resp.json())
        .then(resp => {
            
            searchResult = resp.results;
            let maxLenght = resp.total_pages;
            document.getElementById("movie-section").innerHTML = `${searchResult.map(movieCard).join("")}`;
            document.getElementById("btns-container").innerHTML = paginationCont();
            shortText();

            function paginationPage() {
                const btnNext = document.getElementById("nextBtn");
                const btnPrev = document.getElementById("prevBtn");

                function prevPage() {
                    if (page > 1) {
                        // currentPage--;
                        searchMovie(page - 1);
                    }
                }

                function nextPage() {
                    if (page < maxLenght) {
                        // currentPage++;
                        searchMovie(page + 1)
                        console.log(page);
                    }
                }

                btnNext.addEventListener("click", nextPage);
                btnPrev.addEventListener("click", prevPage);

            }
            paginationPage();
        });
};
btnSearch.addEventListener("click", function () {
    searchMovie(1);
});
inputMovies.addEventListener("keydown", function(event) {
    let inputSearch = document.getElementById("search-form__input").value;
    if (event.keyCode === 13) {
        searchMovie(inputSearch, 1);
        event.preventDefault();
    }
});

// Load now playing movie
function loadNowPlaying(page) {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=642874b006093ef1d8becb7a5a90179c&page=" + page + "")
        .then(resp => resp.json())

        .then(resp => {
            searchResult = resp.results;
            maxLength = resp.total_pages;
            document.getElementById("movie-section").innerHTML = `${searchResult.map(movieCard).join("")}`;
            document.getElementById("btns-container").innerHTML = paginationCont();
            shortText();

            function paginationPage() {
                const btnNext = document.getElementById("nextBtn");
                const btnPrev = document.getElementById("prevBtn");

                function prevPage() {
                    if (page > 1) {
                        // currentPage--;
                        loadNowPlaying(page - 1);
                    }
                }

                function nextPage() {
                    if (page < maxLength) {
                        // currentPage++;
                        loadNowPlaying(page + 1)
                        console.log(page);
                    }
                }

                btnNext.addEventListener("click", nextPage);
                btnPrev.addEventListener("click", prevPage);

            }
            paginationPage();
        });
};
// Load top rated movie
function loadTopRated(page) {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=642874b006093ef1d8becb7a5a90179c&page=" + page + "")
        .then(resp => resp.json())
        .then(resp => {
            searchResult = resp.results;
            maxLength = resp.total_pages;
            document.getElementById("movie-section").innerHTML = `${searchResult.map(movieCard).join("")}`;
            document.getElementById("btns-container").innerHTML = paginationCont();
            shortText();

            function paginationPage() {
                const btnNext = document.getElementById("nextBtn");
                const btnPrev = document.getElementById("prevBtn");

                function prevPage() {
                    if (page > 1) {
                        // currentPage--;
                        loadTopRated(page - 1);
                    }
                }

                function nextPage() {
                    if (page < maxLength) {
                        // currentPage++;
                        loadTopRated(page + 1)
                        console.log(page);
                    }
                }

                btnNext.addEventListener("click", nextPage);
                btnPrev.addEventListener("click", prevPage);

            }
            paginationPage();
        });

};
// Load upcoming movie
function loadUpcoming(page) {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=642874b006093ef1d8becb7a5a90179c&page=" + page + "")
        .then(resp => resp.json())
        .then(resp => {
            searchResult = resp.results;
            maxLength = resp.total_pages;
            document.getElementById("movie-section").innerHTML = `${searchResult.map(movieCard).join("")}`;
            document.getElementById("btns-container").innerHTML = paginationCont();
            shortText();

            function paginationPage() {
                const btnNext = document.getElementById("nextBtn");
                const btnPrev = document.getElementById("prevBtn");

                function prevPage() {
                    if (page > 1) {
                        // currentPage--;
                        loadUpcoming(page - 1);
                    }
                }

                function nextPage() {
                    if (page < maxLength) {
                        // currentPage++;
                        loadUpcoming(page + 1)
                        console.log(page);
                    }
                }

                btnNext.addEventListener("click", nextPage);
                btnPrev.addEventListener("click", prevPage);

            }
            paginationPage();
        });

};



