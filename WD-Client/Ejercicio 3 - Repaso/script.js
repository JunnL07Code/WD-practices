const form = document.getElementById("viaje-form");
const limpiar = document.getElementById("boton-limpiar");
let idNumber = 0;

// activa el botón de limpiar todo, al click resetea el formulario
limpiar.addEventListener("click", () => {
    form.reset();
})

// activa el submit, crea div con la info introducida
form.addEventListener("submit", (intro => {
    intro.preventDefault();

    const divViaje = document.createElement("div");
    divViaje.setAttribute("id", idNumber);
    idNumber++;

    const listaDatos = document.createElement("ul");
    const destino = document.createElement("li");
    const fecha = document.createElement("li");

    const botonBorrar = document.createElement("button");
    botonBorrar.innerText = "Borrar";

    destino.innerText = "Destino: " + intro.target.elements.destino.value;
    fecha.innerText = "Fecha: " + intro.target.elements.fecha.value;

    divViaje.appendChild(listaDatos);
    listaDatos.appendChild(destino);
    listaDatos.appendChild(fecha);
    document.body.appendChild(divViaje);

    divViaje.appendChild(botonBorrar);

    botonBorrar.addEventListener("click", () => {
        divViaje.remove();
    })

}))