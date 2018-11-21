"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var movieList = new XMLHttpRequest();
var movieSearch = new XMLHttpRequest();
var movieObj;
var movieResult;
var searchObj;
var searchResult;
popular();

function popular(_x) {
  return _popular.apply(this, arguments);
}

function _popular() {
  _popular = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(page) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://api.themoviedb.org/3/movie/popular?api_key=642874b006093ef1d8becb7a5a90179c&page=" + page + "").then(function (resp) {
              return resp.json();
            }).then(function (resp) {
              movieApi = resp;
              movieResult = resp.results;
              maxLenght = resp.total_pages;
              document.getElementById("movie-section").innerHTML = "".concat(movieResult.map(movieCard).join(""));
              shortText();
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _popular.apply(this, arguments);
}

function paginationPage() {
  return _paginationPage.apply(this, arguments);
} // paginationPage();
// cooco
// NAVIGATION CLOSE/OPEN


function _paginationPage() {
  _paginationPage = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var infoLenght, btnNext, btnPrev, currentPage, prevPage, nextPage;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            nextPage = function _ref2() {
              if (currentPage < maxLenght) {
                currentPage++;
                popular(currentPage);
              }
            };

            prevPage = function _ref() {
              if (currentPage > 1) {
                currentPage--;
                popular(currentPage);
              }
            };

            _context2.next = 4;
            return popular();

          case 4:
            infoLenght = _context2.sent;
            console.log(maxLenght);
            btnNext = document.getElementById("nextBtn");
            btnPrev = document.getElementById("prevBtn");
            currentPage = 1; // let maxlenght = resp.total_pages;

            btnNext.addEventListener("click", nextPage);
            btnPrev.addEventListener("click", prevPage);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _paginationPage.apply(this, arguments);
}

var openBtn = document.getElementById("navBtnOpen");
var closeBtn = document.getElementById("navBtnClose");
var navList = document.getElementById("navList");
var linkList = document.getElementsByClassName("navigation__list-item");
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
} // CARD TEMPLATE HTML


function movieCard(movie) {
  return "\n    <div class=\"movie-container\">\n        <img src=\"http://image.tmdb.org/t/p/w185/".concat(movie.poster_path, "\" alt=\"NO PHOTO\" class=\"movie-container__img\">\n        <div class=\"movie-container__about\">\n            <span class=\"movie-container__percent\">").concat(movie.vote_average, "</span>\n            <h2 class=\"movie-container__title\">").concat(movie.original_title, "</h2>\n            <p class=\"movie-container__date\">").concat(movie.release_date, "</p>\n            <p class=\"movie-container__text\">").concat(movie.overview, "</p>\n            <span class=\"movie-container__star\"><input type=\"checkbox\" class=\"ss\"></span>\n        </div>\n    </div>\n    ");
} // MAX LENGHT TEXT IN CONTAINER ABOUT


function shortText() {
  var maxText = document.getElementsByClassName("movie-container__text");

  for (var _i = 0; _i < maxText.length; _i++) {
    if (maxText[_i].className == "movie-container__text") {
      maxText[_i].innerHTML = maxText[_i].innerHTML.substring(0, 210) + '<span>...</span>';
    }
  }
} // NEW REQUEST FOR SEARCH AFTER CLICK BUTTON


var btnSearch = document.getElementById("search-form__btn");

function searchMovie(_x2) {
  return _searchMovie.apply(this, arguments);
}

function _searchMovie() {
  _searchMovie = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(page) {
    var inputSearch;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            inputSearch = document.getElementById("search-form__input").value;
            _context3.next = 3;
            return fetch("https://api.themoviedb.org/3/search/movie?api_key=642874b006093ef1d8becb7a5a90179c&query=" + inputSearch + "&page=" + page + "").then(function (resp) {
              return resp.json();
            }).then(function (resp) {
              searchResult = resp.results;
              maxLenghtx = resp.total_pages;
              document.getElementById("movie-section").innerHTML = "".concat(searchResult.map(movieCard).join(""));
              shortText();
            });

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _searchMovie.apply(this, arguments);
}

btnSearch.addEventListener("click", searchMovie);

function paginationPageS() {
  return _paginationPageS.apply(this, arguments);
}

function _paginationPageS() {
  _paginationPageS = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var infoLenght, btnNext, btnPrev, currentPage, prevPage, nextPage;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            nextPage = function _ref4() {
              if (currentPage < maxLenght) {
                currentPage++;
                searchMovie(currentPage);
                console.log(currentPage); // console.log(lenght);
              }
            };

            prevPage = function _ref3() {
              if (currentPage > 1) {
                currentPage--;
                searchMovie(currentPage);
              }
            };

            _context4.next = 4;
            return searchMovie();

          case 4:
            infoLenght = _context4.sent;
            console.log(maxLenghtx);
            btnNext = document.getElementById("nextBtn");
            btnPrev = document.getElementById("prevBtn");
            currentPage = 1; // let maxlenght = resp.total_pages;

            btnNext.addEventListener("click", nextPage);
            btnPrev.addEventListener("click", prevPage);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _paginationPageS.apply(this, arguments);
}

paginationPageS(); // LOAD JSON FROM NAV LINKS

function loadPopular(page) {
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=642874b006093ef1d8becb7a5a90179c&page=" + page + "").then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    searchResult = resp.results;
    document.getElementById("movie-section").innerHTML = "".concat(searchResult.map(movieCard).join(""));
    shortText(); // paginationSites(resp);
  });
}

;

function loadNowPlaying() {
  fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=642874b006093ef1d8becb7a5a90179c&page=1").then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    searchResult = resp.results;
    document.getElementById("movie-section").innerHTML = "".concat(searchResult.map(movieCard).join(""));
    shortText();
  });
}

;

function loadTopRated() {
  fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=642874b006093ef1d8becb7a5a90179c&page=1").then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    searchResult = resp.results;
    document.getElementById("movie-section").innerHTML = "".concat(searchResult.map(movieCard).join(""));
    shortText();
  });
}

;

function loadUpcoming() {
  fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=642874b006093ef1d8becb7a5a90179c&page=1").then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    searchResult = resp.results;
    document.getElementById("movie-section").innerHTML = "".concat(searchResult.map(movieCard).join(""));
    shortText();
  });
}

;
var popularBtn = document.getElementById("popular");
var nowPlayingBtn = document.getElementById("nowPlaying");
var topRatedBtn = document.getElementById("topRated");
var upcomingBtn = document.getElementById("upcoming");
popularBtn.addEventListener("click", loadPopular);
nowPlayingBtn.addEventListener("click", loadNowPlaying);
topRatedBtn.addEventListener("click", loadTopRated);
upcomingBtn.addEventListener("click", loadUpcoming); // PAGINATION SITES

function paginationSites(resp) {
  var btnNext = document.getElementById("nextBtn");
  var btnPrev = document.getElementById("prevBtn");
  var currentPage = 1;
  var maxlenght = resp.total_pages;

  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      changePage(currentPage);
    }
  }

  function nextPage() {
    if (currentPage < maxlenght) {
      currentPage++;
      loadPopular(currentPage);
      console.log(currentPage); // console.log(lenght);
    }
  }

  btnNext.addEventListener("click", nextPage);
  btnPrev.addEventListener("click", prevPage);
} // async function getData(url) {
//     const response = await fetch(url);
//     return response.json()
// }
// async function main() {
//     const data = await getData(URL);
//     console.log(data)
// }

/*
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
            getLenght(resp);
            // const promise1 = new Promise(function(resolve, reject) {
            //     resolve
            //   });
            
            
        });
        // let lenght = function getLenght(resp){
        //     // console.log(resp.total_pages)
        //     return resp.total_pages;
        // };
        
        
};
*/
// let lenght = changePage().then(function(resp){
//     console.log(resp.total_pages);
//     return resp.total_pages;
// });
// function getLenght(resp){
//     // console.log(resp.total_pages)
//     let getLenght = resp.total_pages;
//     console.log(getLenght);
//     return getLenght;
// };
// console.log(getLenght());
// console.log("drigi "+maxlenght);
// function getLenght(resp){
//     const data = changePage();
//     // resp.total_pages;
//     // console.log(resp.total_pages);
//     // console.log(data);
// };
// console.log(getLeanght());

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