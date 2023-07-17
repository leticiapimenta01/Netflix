/*Listando filmes */
const API_KEY = 'api_key=5bd5f77abfb3838de6071e921564531d';
const BASE_URL = 'https://api.themoviedb.org/3';
const CINEMA_URL = BASE_URL + '/discover/movie?primary_release_date.gte=2022-11-01&primary_release_date.lte=2022-11-30&' + API_KEY;
const DRAMA_URL = BASE_URL + '/discover/movie?with_genres=18&primary_release_year=2022&' + API_KEY;
const COMEDIA_URL = BASE_URL + '/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const rowMovies = document.getElementById('cinema');
const dramaMovies = document.getElementById('dramaMovies');
const comediaMovies = document.getElementById('comediaMovies');


getMovies(CINEMA_URL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{
        showMovies(data.results);
    })
}

getMoviesDrama(DRAMA_URL);

function getMoviesDrama(url){
    fetch(url).then(res => res.json()).then(data =>{
        showMoviesDrama(data.results);
    })
}

getMoviesComedia(COMEDIA_URL);

function getMoviesComedia(url){
    fetch(url).then(res => res.json()).then(data =>{
        showMoviesComedia(data.results);
    })
}

function showMovies(data){
    rowMovies.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        console.log(data);
        movieEl.innerHTML = `
            <div class="movie">
                <a href=""><img src="${IMG_URL+poster_path}" alt="${title}"></a>
                <span>${title}</span>
            </div>
        `

        rowMovies.appendChild(movieEl);
        });
}

function showMoviesDrama(data){
    dramaMovies.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <div class="movie">
                <a href=""><img src="${IMG_URL+poster_path}" alt="${title}"></a>
                <span>${title}</span>
            </div>
        `

        dramaMovies.appendChild(movieEl);
    })
}

function showMoviesComedia(data){
    comediaMovies.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <div class="movie">
                <a href=""><img src="${IMG_URL+poster_path}" alt="${title}"></a>
                <span>${title}</span>
            </div>
        `

        comediaMovies.appendChild(movieEl);
    })
}

/* Mudando o trailer */
var user1 = localStorage.getItem('user1')

console.log(user1);

/* Clique do botão para ir para outra página */
function irYoutube() {
    window.location.href = "https://youtu.be/otutSrxYpa4";
}

function irInfo() {
    window.location.href = "https://www.netflix.com/br/title/80057281";
}