// Escribe un programa que muestre por consola:
// Iniciando ritual...
// Fase 1 completada
// Fase 2 completada
// Fase 3 completada
// Fase 4 completada
// Fase 5 completada
// Ritual completado.


// Condiciones:
// - Utiliza un bucle para generar las cinco fases. No escribas cinco mensajes independientes.
// - Lleva la cuenta de las fases completadas.
// - Al terminar, muestra el total de fases completadas.
// - Como ampliación, resuelve el mismo problema primero con for y después con while.

console.log("Starting activation ritual...");

for (let i = 1; i < 6; i++) {
    console.log("Phase " + i + " ended.");
}

console.log("Ritual ended. Merlinus is functioning full power.");


// WHILE VERSION

// let i = 1;

// while (i < 6) {
//     console.log("Phase " + i + " ended.");
//     i++;
// }