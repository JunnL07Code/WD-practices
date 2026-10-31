fetch ("https://pokeapi.co/api/v2/pokemon/bulbasaur/").then( (answer) => {
    answer.json().then( (answerBody) => {
        console.log(answerBody);
        document.querySelector("body").innerHTML += "<p>" + answerBody.name + "</p>";
        document.querySelector("body").innerHTML += "<img src=\"" + answerBody.sprites.front_default + "\" >";
    })
})