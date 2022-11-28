/* Buscar filme */
const API_KEY = 'api_key=5bd5f77abfb3838de6071e921564531d';
const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const buscaURL = BASE_URL + '/search/movie?' + API_KEY;

const form = document.getElementById('form');
const busca = document.getElementById('busca');

const rowMovies = document.getElementById('em-alta');



function fazerBusca(){
    var titulo = document.querySelector('#titulo');
    titulo.textContent = "Busca feita";
}


getMovies(POPULAR_URL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{
        showMovies(data.results);
    })
}

function showMovies(data){
    rowMovies.innerHTML = '';

    data.forEach(movie => {
        const {id, title, poster_path} = movie;
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

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const buscaTerm = busca.value;

    if(buscaTerm){
        getMovies(buscaURL + '&query=' + buscaTerm);
    }
})