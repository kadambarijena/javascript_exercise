const API_KEY = '146d529ae2bbba2a0c545ea2a20caf70';

const url = 'https://api.themoviedb.org/3/search/movie?api_key=146d529ae2bbba2a0c545ea2a20caf70';

//selecting elements from the DOM
const buttonEl = document.querySelector('#search');
const inputEl = document.querySelector('#inputValue');

function createMovieContainer() {

}

buttonEl.onclick = function(e) {
  e.preventDefault();
  const value = inputEl.value;

  const newUrl = url + '&query=' + value;


  fetch(newUrl)
    .then((res) => res.json())//Return a json
    .then((data) => {
      //data.results[]
      console.log('Data: ', data);
    })
    .catch((error) => {
      console.log('Error: ', error);
    });

  console.log('Value:', value);
}