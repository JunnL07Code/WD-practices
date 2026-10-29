fetch("http://pokeapi.co/api/v2/pokemon").then( (r)) => {
    r.json().then( (bodyJson) => {
        console.log(bodyJson)
        for (let move of bodyJson.results {
            document.querySelector("h2").innerHTML += move.name
        }
        )
    })
}