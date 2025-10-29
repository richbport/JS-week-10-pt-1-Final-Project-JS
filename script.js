const moviesWrapper = document.querySelector('.movies')

console.log(moviesWrapper)

function searchChange(event) {
    console.log(event.target.value)
}

async function renderMovies() {
    const response = await fetch('http://omdbapi.com/?s=batman&apikey=4c2eefb7')
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
    })
}

renderMovies()