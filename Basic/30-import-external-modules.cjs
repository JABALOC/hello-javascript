// Modulos externos

// Esto importa un módulo externo llamado os (Operating System), este módulo
// viene con Node.js y permite obtener información del sistema operativo desde el 
// que se está ejecutando el código

// require() es una forma de importar módulos en JavaScript cuando NO usamos módulos 
// tipo import/export, sino el sistema clásico de Node.js (commonJS)
// os es un módulo nativo de Node.js que ofrece funciones para interactuar con el 
// sistema operativo.
const os = require("os");

console.log(os.platform()); // Muestra el sistema operativo
console.log(os.arch()); // Muestra la arquitectura del procesador
console.log(os.totalmem()); // Muestra la memoria del sistema en bytes
console.log(os.freemem()); // Muestra la memoria libre disponible en bytes