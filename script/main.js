"use strict";

var movieObj;
var movieResult;
var searchObj;
var searchResult;
var openBtn = document.getElementById("navBtnOpen");
var closeBtn = document.getElementById("navBtnClose");
var navList = document.getElementById("navList");
var linkList = document.getElementsByClassName("navigation__list-item");
var popularBtn = document.getElementById("popular");
var nowPlayingBtn = document.getElementById("nowPlaying");
var topRatedBtn = document.getElementById("topRated");
var upcomingBtn = document.getElementById("upcoming");
var btnSearch = document.getElementById("search-form__btn");
var inputMovies = document.getElementById("search-form__input"); // NAVIGATION CLOSE/OPEN

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
closeBtn.addEventListener("click", closeNav); // iterate links for close nav

for (i = 0; i < linkList.length; i++) {
  linkList[i].addEventListener('click', closeNav);
} // Links in nav - load json data


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
}); // CARD TEMPLATE HTML

function movieCard(movie) {
  return "\n    <div class=\"movie-container\">\n        <img src=\"http://image.tmdb.org/t/p/w185/".concat(movie.poster_path, "\" alt=\"NO PHOTO\" class=\"movie-container__img\">\n        <div class=\"movie-container__about\">\n            <span class=\"movie-container__percent\">").concat(movie.vote_average, "</span>\n            <h2 class=\"movie-container__title\">").concat(movie.original_title, "</h2>\n            <p class=\"movie-container__date\">").concat(movie.release_date, "</p>\n            <p class=\"movie-container__text\">").concat(movie.overview, "</p>\n            <a href=\"https://www.themoviedb.org/movie/").concat(movie.id, "\" class=\"movie-container__more\">MORE</a>\n        </div>\n    </div>\n    ");
} // buttons for pagination template


function paginationCont() {
  return "\n    <button class=\"btns-container__btn btns-container__btn--left\" id=\"prevBtn\"><span class=\"fas fa-caret-left\"></span></button>\n            <button class=\"btns-container__btn btns-container__btn--right\" id=\"nextBtn\"><span class=\"fas fa-caret-right\"></span></button>\n    ";
} // MAX LENGHT TEXT IN CONTAINER ABOUT


function shortText() {
  var maxText = document.getElementsByClassName("movie-container__text");

  for (var _i = 0; _i < maxText.length; _i++) {
    if (maxText[_i].className == "movie-container__text") {
      maxText[_i].innerHTML = maxText[_i].innerHTML.substring(0, 210) + '<span>...</span>';
    }
  }
} // Load popular movie


popular(1);

function popular(page) {
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=642874b006093ef1d8becb7a5a90179c&page=" + page + "").then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    movieApi = resp;
    movieResult = resp.results;
    maxLength = resp.total_pages;
    document.getElementById("movie-section").innerHTML = "".concat(movieResult.map(movieCard).join(""));
    document.getElementById("btns-container").innerHTML = paginationCont();
    shortText();

    function paginationPage() {
      var btnNext = document.getElementById("nextBtn");
      var btnPrev = document.getElementById("prevBtn");

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
} // Load search movie


function searchMovie(inputSearch, page) {
  fetch("https://api.themoviedb.org/3/search/movie?api_key=642874b006093ef1d8becb7a5a90179c&query=" + inputSearch + "&page=" + page + "").then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    searchResult = resp.results;
    var maxLenght = resp.total_pages;
    document.getElementById("movie-section").innerHTML = "".concat(searchResult.map(movieCard).join(""));
    document.getElementById("btns-container").innerHTML = paginationCont();
    shortText();

    function paginationPage() {
      var btnNext = document.getElementById("nextBtn");
      var btnPrev = document.getElementById("prevBtn");

      function prevPage() {
        if (page > 1) {
          // currentPage--;
          searchMovie(page - 1);
        }
      }

      function nextPage() {
        if (page < maxLenght) {
          // currentPage++;
          searchMovie(page + 1);
          console.log(page);
        }
      }

      btnNext.addEventListener("click", nextPage);
      btnPrev.addEventListener("click", prevPage);
    }

    paginationPage();
  });
}

;
btnSearch.addEventListener("click", function () {
  searchMovie(1);
});
inputMovies.addEventListener("keydown", function (event) {
  var inputSearch = document.getElementById("search-form__input").value;

  if (event.keyCode === 13) {
    searchMovie(inputSearch, 1);
    event.preventDefault();
  }
}); // Load now playing movie

function loadNowPlaying(page) {
  fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=642874b006093ef1d8becb7a5a90179c&page=" + page + "").then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    searchResult = resp.results;
    maxLength = resp.total_pages;
    document.getElementById("movie-section").innerHTML = "".concat(searchResult.map(movieCard).join(""));
    document.getElementById("btns-container").innerHTML = paginationCont();
    shortText();

    function paginationPage() {
      var btnNext = document.getElementById("nextBtn");
      var btnPrev = document.getElementById("prevBtn");

      function prevPage() {
        if (page > 1) {
          // currentPage--;
          loadNowPlaying(page - 1);
        }
      }

      function nextPage() {
        if (page < maxLength) {
          // currentPage++;
          loadNowPlaying(page + 1);
          console.log(page);
        }
      }

      btnNext.addEventListener("click", nextPage);
      btnPrev.addEventListener("click", prevPage);
    }

    paginationPage();
  });
}

; // Load top rated movie

function loadTopRated(page) {
  fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=642874b006093ef1d8becb7a5a90179c&page=" + page + "").then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    searchResult = resp.results;
    maxLength = resp.total_pages;
    document.getElementById("movie-section").innerHTML = "".concat(searchResult.map(movieCard).join(""));
    document.getElementById("btns-container").innerHTML = paginationCont();
    shortText();

    function paginationPage() {
      var btnNext = document.getElementById("nextBtn");
      var btnPrev = document.getElementById("prevBtn");

      function prevPage() {
        if (page > 1) {
          // currentPage--;
          loadTopRated(page - 1);
        }
      }

      function nextPage() {
        if (page < maxLength) {
          // currentPage++;
          loadTopRated(page + 1);
          console.log(page);
        }
      }

      btnNext.addEventListener("click", nextPage);
      btnPrev.addEventListener("click", prevPage);
    }

    paginationPage();
  });
}

; // Load upcoming movie

function loadUpcoming(page) {
  fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=642874b006093ef1d8becb7a5a90179c&page=" + page + "").then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    searchResult = resp.results;
    maxLength = resp.total_pages;
    document.getElementById("movie-section").innerHTML = "".concat(searchResult.map(movieCard).join(""));
    document.getElementById("btns-container").innerHTML = paginationCont();
    shortText();

    function paginationPage() {
      var btnNext = document.getElementById("nextBtn");
      var btnPrev = document.getElementById("prevBtn");

      function prevPage() {
        if (page > 1) {
          // currentPage--;
          loadUpcoming(page - 1);
        }
      }

      function nextPage() {
        if (page < maxLength) {
          // currentPage++;
          loadUpcoming(page + 1);
          console.log(page);
        }
      }

      btnNext.addEventListener("click", nextPage);
      btnPrev.addEventListener("click", prevPage);
    }

    paginationPage();
  });
}

;