const moviesWrapper = document.querySelector('.movies')

function searchChange(event) {
    renderMovies(event.target.value)
}

async function renderMovies(searchTerm) {
  console.log("This is the search term", searchTerm)
    const response = await fetch(`http://omdbapi.com/?s=${searchTerm}&apikey=4c2eefb7`)
    const data = await response.json()
    const moviesArr = data.Search
    console.log(moviesArr)
    moviesWrapper.innerHTML = moviesArr.slice(0, 6).map((movie) => {
        return `
        <div class="movie">
        <img src=${movie.Poster} alt="" />
        <h2>${movie.Title}</h2>
        <h4>${movie.Year}</h4>
        <button>Learn More</button>
        </div>
        `
    }).join("")
}
