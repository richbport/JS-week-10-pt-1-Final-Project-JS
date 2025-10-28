function searchChange(event) {
    console.log(event.target.value)
}

async function renderMovies() {
    const response = await fetch('http://omdbapi.com/?s=fast&apikey=4c2eefb7')
    const data = await response.json()
    console.log(data.Search)
}

renderMovies()