function searchChange(event) {
    console.log(event.target.value)
}

async function renderMovies() {
    console.log( await fetch('http://omdbapi.com/?s=batman&apikey=4c2eefb7'))
}

renderMovies()