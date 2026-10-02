// Guardamos variable con el formulario y los distintos datos

const form = document.getElementById("main-formulario")
const botonBorrar = document.getElementById("borrar")


// Funcionamiento del botón
    // BORRAR. declaramos la escucha sobre el mismo, hacemos que al pulsar, se ejecute la función que lleva borrado como parámetro
botonBorrar.addEventListener("click", () => {
    form.reset();

})

    // SUBMIT. declaramos la escucha sobre el mismo, hacemos que al subir los datos, se ejecute la función que lleva subida como parámetro.
form.addEventListener("submit", (subida) => {
   subida.preventDefault();

    // creado del div en el que se muestran los datos. Podría hacerlo directamente en el html, pero quizá sea más limpio así
    const mostrarDatos = document.createElement(div)
    document.body.appendChild(mostrarDatos)
    
    const lista = document.createElement(ul)
    mostrarDatos.appendChild(lista)

    const dato = document.createElement(li)
    lista.appendChild(dato)
    
    dato.innerText()

    // introducción de la lista en el div
    mostrarDatos.


})