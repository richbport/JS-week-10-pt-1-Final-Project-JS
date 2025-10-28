function searchChange(event) {
    console.log(event.target.value)
}

function renderMovies() {
    console.log(fetch('https://omdbapi.com/?s=batman%apikey=4c2eefb7'))
}

renderMovies()