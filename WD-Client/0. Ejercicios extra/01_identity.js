// Escribe un programa que:
// 1. Guarde el nombre del servidor en una constante llamada serverName, con el valor "Merlinus Mk2".
// 2. Guarde su edad en años en una variable serverAge, con el valor 42.
// 3. Guarde su estado en una variable serverStatus, inicialmente con el valor "Iniciando".
// 4. Cambie el estado a "Operativo".
// 5. Muestre por consola un informe con este formato exacto:
// === INFORME DEL SERVIDOR ===
// Nombre: Merlinus Mk2
// Edad: 42 años
// Estado: Operativo


// Condiciones:
// - Utiliza const y let de forma apropiada.
// - Genera las líneas del informe a partir de las variables, sin escribir los valores directamente en cada mensaje.
// - No necesitas HTML ni crear una página web.

let serverName = "Merlinus Mk2";
let serverAge = 42;
let serverStatus = "Iniciando";

serverStatus = "Operativo";

console.log(
    "=== INFORME DEL SERVIDOR ===\r" + // es mejor usar \n, no \r
    "Nombre: " + serverName + "\r"+
    "Edad: " + serverAge + "\r" +
    "Estado: " +serverStatus 
);