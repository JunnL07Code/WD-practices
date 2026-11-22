// El núcleo empieza con 1250 unidades de energía. Durante su arranque:
// - Consume 175 unidades al iniciar el sistema.
// - Recupera 320 unidades al absorber energía ambiental.
// - Consume el 20 % de la energía que tiene en ese momento al ejecutar una rutina de diagnóstico.
// Escribe un programa que calcule la energía restante y la muestre por consola.

// Condiciones:
// - Guarda la energía en una variable.
// - Actualiza su valor en cada etapa.
// - Muestra el resultado después de cada operación, para poder seguir la evolución de la reserva.
// - No calcules los resultados a mano para introducirlos como valores fijos.

let energia = 1250;

console.log("energy_level: " + energia);
console.log("system_boot...")

energia -= 175;

console.log("booting_ended.");
console.log("energy_level: " + energia);
console.log("initiating_energy_restablishment...");

energia += 320;

console.log("restablishment_ended.");
console.log("energy_level: " + energia);
console.log("initiating_diagnosis_daemon...");

energia *= 0.8;

console.log("diagnosis_ended.");
console.log("energy_level: " + energia);
console.log("nucleus_status:_operative/running.");