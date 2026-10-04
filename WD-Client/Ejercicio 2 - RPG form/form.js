// Guardamos variable con el formulario y los distintos datos

const form = document.getElementById("main-formulario");
let idNumber = 0;

// Funcionamiento del botón
    // BORRAR. declaramos la escucha sobre el mismo, hacemos que al pulsar, se ejecute la función que lleva borrado como parámetro

    // SUBMIT. declaramos la escucha sobre el mismo, hacemos que al subir los datos, se ejecute la función que lleva subida como parámetro.
form.addEventListener("submit", (subida) => {
   subida.preventDefault();

    // crea el div con los datos y le asigna un id. Luego aumenta idNumber para que el siguiente div reciba otro numero.
   const divDatos = document.createElement("div");
   divDatos.setAttribute("id", idNumber);
   idNumber = idNumber + 1;

   const listaDatos = document.createElement("ul");
   const nombrePersonaje = document.createElement("li");
   const clasePersonaje = document.createElement("li");
   const nivelPersonaje = document.createElement("li");
   const fechaNacimientoPersonaje = document.createElement("li");
   const trasfondoPersonaje = document.createElement("li");

   const botonBorrar = document.createElement("button");
   botonBorrar.setAttribute("id", "borrardiv" + idNumber);
   botonBorrar.innerText = "Borrar";

   const botonActualizar = document.createElement("button");
   botonActualizar.setAttribute("id", "actualizardiv" + idNumber);
   botonActualizar.innerText = "Actualizar";

   nombrePersonaje.innerText = "Nombre: " + subida.target.elements.Nombre.value;
   clasePersonaje.innerText = "Clase: " + subida.target.elements.Clase.value;
   nivelPersonaje.innerText = "Nivel: " + subida.target.elements.Nivel.value;
   fechaNacimientoPersonaje.innerText = "Fecha Nacimiento: " + subida.target.elements.Nacimiento.value;
   trasfondoPersonaje.innerText = "Trasfondo: " + subida.target.elements.Trasfondo.value;

   listaDatos.appendChild(nombrePersonaje);
   listaDatos.appendChild(clasePersonaje);
   listaDatos.appendChild(nivelPersonaje);
   listaDatos.appendChild(fechaNacimientoPersonaje);
   listaDatos.appendChild(trasfondoPersonaje);

   divDatos.appendChild(listaDatos);
   divDatos.appendChild(botonBorrar);
   divDatos.appendChild(botonActualizar);


   document.body.appendChild(divDatos)


})