// GRABBING ELEMENTS FROM HTML
const searchName = document.querySelector(".searchName");
const moviesWrapper = document.querySelector(".movies");

// GLOBAL MOVIES VARIABLE
let currentMovies = []

// HANDLING THE SEARCH
function searchChange(event) {
  renderMovies(event.target.value);
  searchName.innerHTML = event.target.value;
}

// RENDERING MOVIES / CALLING THE API
async function renderMovies(searchTerm) {
  const response = await fetch(
    `http://omdbapi.com/?s=${searchTerm}&apikey=4c2eefb7`
  );
  const data = await response.json();
  currentMovies = data.Search;
  displayMovies(currentMovies);
}

//DISPLAYING MOVIES
function displayMovies(movieList) {
  moviesWrapper.innerHTML = movieList
    .slice(0, 6)
    .map((movie) => {
      return `
        <div class="movie">
        <img src=${movie.Poster} alt="" />
        <h2>${movie.Title}</h2>
        <h4>${movie.Year}</h4>
        <button>Learn More</button>
        </div>
        `;
    })
    .join("");
}

//SORTING MOVIES
function sortChange(event) {
  const sortOption = event.target.value

  let sortedMovies = [...currentMovies]
  
  if (sortOption === "Newest") {
    sortedMovies.sort((a, b) => Number(b.Year) - Number(a.Year))
  } else if (sortOption === "Oldest") {
    sortedMovies.sort((a, b) => Number(a.Year) - Number(b.Year))
  }
  displayMovies(sortedMovies)
}

