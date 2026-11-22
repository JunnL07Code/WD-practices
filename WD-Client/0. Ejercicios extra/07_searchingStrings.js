// Tienes este registro:
// let corruptedLog = "   MERLINUS Mk2 :: SYSTEM FAILURE :: reactor temperature critical   ";


// Debes conseguir que la consola muestre exactamente:
// Original log:
//    MERLINUS Mk2 :: SYSTEM FAILURE :: reactor temperature critical   

// Clean log:
// MERLINUS Mk2 :: SYSTEM FAILURE :: reactor temperature critical

// Server name:
// MERLINUS Mk2

// Contains failure:
// true

// Failure position:
// 17

// Lowercase log:
// merlinus mk2 :: system failure :: reactor temperature critical


// Condiciones:
// 1. Utiliza trim() para eliminar los espacios sobrantes.
// 2. Extrae el nombre del servidor usando métodos de strings.
// 3. Comprueba si el registro contiene "FAILURE".
// 4. Encuentra la posición de "FAILURE".
// 5. Convierte el registro limpio a minúsculas.
// 6. No utilices expresiones regulares ni Template Literals.
// Puedes crear variables adicionales si lo necesitas. Y recuerda: no queremos reparar el reactor todavía. Primero necesitamos saber qué demonios ha pasado.


let corruptedLog = "   MERLINUS Mk2 :: SYSTEM FAILURE :: reactor temperature critical   ";
let cleanLog = corruptedLog.trim();

console.log("Original log:\n" + corruptedLog + "\n");
console.log("Clean log:\n" + cleanLog + "\n");
console.log("Server name:\n" + cleanLog.substring(0,12) + "\n");
console.log ("Contains failure:\n" + cleanLog.includes("FAILURE") + "\n");
console.log ("Failure position:\n" + cleanLog.indexOf("FAILURE") + "\n");
console.log ("Lowercase log:\n" + cleanLog.toLowerCase() + "\n");