function searchChange(event) {
    console.log(event.target.value)
}

console.log(fetch('https://omdbapi.com/?s=batman%apikey=4c2eefb7'))