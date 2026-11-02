let table = document.createElement("table");
document.getElementById("content").appendChild(table);


fetch("https://swapi.dev/api/people").then( (answer) => {
    answer.json().then( (answerBody) => {
        console.log(answerBody);

        for (let character of answerBody.results) {

            let row = document.createElement("tr");

            table.appendChild(row);
            row.innerHTML += "<td>" + character.name + "</td>" +
                             "<td>" + character.height + "</td>" +
                             "<td>" + character.birth_year + "</td>"


        row.addEventListener("click", () =>{
            alert ("clickaste en " + character.name)
            }
        )}
    })
})