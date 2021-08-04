const API_KEY = '146d529ae2bbba2a0c545ea2a20caf70';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const url = 'https://api.themoviedb.org/3/search/movie?api_key=146d529ae2bbba2a0c545ea2a20caf70';

//selecting elements from the DOM
const buttonEl = document.querySelector('#search');
const inputEl = document.querySelector('#inputValue');
const movieSearch =document.querySelector('#movie_search');


function movieSection(movies) {
  return movies.map((movie) => {
    return `
      <img src=${IMAGE_URL + movie.poster_path} data-movie-id=${movie.id}/>
    `;
  })
}

/*
  <div class="movie">
    <section class="section">
      <img src="https://image.tmdb.org/t/p/w500/qC167IbZpSrwX7wWgg3BeDQbTDr.jpg" alt="" data-movie-id="584">
      <img src="https://image.tmdb.org/t/p/w500/jY9ef5nqY4xIIMu3yzW3qamUCoi.jpg" alt="" data-movie-id="9799">
    </section>
    <div class="content">
      <p id="content-close">X</p>
    </div>
  </div>
*/

function createMovieContainer(movies) {
  const movieElement = document.createElement('div');
  movieElement.setAttribute('class', 'movie');

  const movieTemplate = `
    <section class="section">
     ${movieSection(movies)}
    </section>
    <div class="content">
      <p id="content-close">X</p>
    </div>
  `;

  movieElement.innerHTML = movieTemplate;
  return movieElement;

}

buttonEl.onclick = function(e) {
  e.preventDefault();
  const value = inputEl.value;

  const newUrl = url + '&query=' + value;


  fetch(newUrl)
    .then((res) => res.json())//Return a json
    .then((data) => {
      //data.results[]
      const movies = data.results;
      const movieBlock = createMovieContainer(movies);
      movieSearch.appendChild(movieBlock);
      console.log('Data: ', data);
    })
    .catch((error) => {
      console.log('Error: ', error);
    });

  console.log('Value: ', value);
}