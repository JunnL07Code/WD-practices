const form = document.getElementById("viaje-form");
const limpiar = document.getElementById("boton-limpiar");
let idNumber = 0;

limpiar.addEventListener("click", () => {
    form.reset();
})

form.addEventListener("submit", (intro => {
    intro.preventDefault();

    const divViaje = document.createElement("div");
    divViaje.setAttribute("id", idNumber);
    idNumber++;

    const listaDatos = document.createElement("ul");
    const destino = document.createElement("li");
    const fecha = document.createElement("li");

    destino.innerText = "Destino: " + intro.target.elements.destino.value;
    fecha.innerText = "Fecha: " + intro.target.elements.fecha.value;

    divViaje.appendChild(listaDatos);
    listaDatos.appendChild(destino);
    listaDatos.appendChild(fecha);
    document.body.appendChild(divViaje);

}))