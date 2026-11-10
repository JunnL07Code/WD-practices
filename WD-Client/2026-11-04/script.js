const params = new URLSearchParams(window.location.search)

const URL = "https://thesimpsonsapi.com/api/characters"

console.log(params.get("name"))
console.log(URL)