

const DOMAIN = config.URL;
const API_KEY = config.API;

const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&s=`;

const section = document.querySelector(".movie-list")
const input = document.querySelector('#blank')
let div = document.createElement("div")
div.classList.add("flexBox")
section.append(div)

const searchButton = document.querySelector('#search')

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submitted");
  fetchMovies()
  removieMovies()
  input.value = ""
})

function renderList(movie) {
  movie.forEach((movie) => {
    let smallDiv = document.createElement('div')
    smallDiv.classList.add("newFlex");
    div.append(smallDiv)
    let img = document.createElement('img');
    img.src = movie.Poster
    smallDiv.append(img)
    let title = document.createElement('h4');
    title.innerText = movie.Title
    smallDiv.append(title)
    let year = document.createElement('p')
    year.innerText = movie.Year
    smallDiv.append(year)
  })
}

async function fetchMovies() {
  try {
    let movieTitle = input.value;
    let movieSearch = await axios.get(`${BASE_URL}${movieTitle}`);
    let movie = movieSearch.data.Search;
    renderList(movie);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Done");
  }
}

function removieMovies() {
  div.innerHTML = ""
}