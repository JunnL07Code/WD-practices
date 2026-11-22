// Crea una variable sealIntegrity cuyo valor sea un número entre 0 y 100. El programa debe clasificar el estado del sello según esta escala:
// Integridad	Diagnóstico
// 80–100	"Sello estable"
// 50–79	"Sello debilitado"
// 1–49	"Sello crítico"
// 0	"Sello destruido"

// Si el valor está por debajo de 0 o por encima de 100, muestra "Lectura inválida".

// Condiciones:
// - Utiliza condicionales.
// - Evita que los intervalos se solapen.
// - Prueba los valores 100, 80, 79, 50, 49, 1, 0, -1 y 101.

let sealIntegrity = 100;

    if (sealIntegrity < 0 || sealIntegrity > 100) {
        console.log("Incorrect reading. Please, ensure you're using this spell on an active seal.");       
    } else if (sealIntegrity === 0) {
        console.log("Seal destroyed. Please, refer to the 'The art of sealing: Tome I' to learn how to make the proper ritual of seal creation.");
    } else if (sealIntegrity < 50) {
        console.log("The seal is in a critical status. Please, refer to the 'The art of sealing: Tome II' to learn how to make the proper ritual of seal strength.");
    } else if (sealIntegrity < 80) {
        console.log("The seal integrity is low. Please, refer to the 'The art of sealing: Tome III' to learn how to make the proper seal maintainance routine.");
    } else {
        console.log("The seal integrity is stable. Please, refer to the 'The art of sealing: Tome IV' to learn how to enhance your seal.");
    }

    //NOTAS DE LA CORRECCIÓN: TENER CUIDADO CON LOS CONDICIONALES "==", NO "=". Y LA VALIDACIÓN DE LÍMITES SIEMPRE PRIMERO (LO DE QUE TIENE QUE SER ENTRE 0 Y 100)