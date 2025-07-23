/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

import { funcionExportada, constanteExportada, ClaseExportada } from "./31-export-modules-exercises.js";
import { funcionDeOtraCarpeta, constanteDeOtraCarpeta, ClaseDeOtraCarpeta } from '../../../the_odin_project/exportaMoure.js'
import sum from "./31-export-modules-exercises.js";

// 1. Exporta una función

// Resuelto en el fichero 31-modules-exercises

// 2. Exporta una constante

// Resuelto en el fichero 31-modules-exercises

// 3. Exporta una clase

// Resuelto en el fichero 31-modules-exercises

// 4. Importa una función

console.log(funcionExportada());

// 5. Importa una constante

console.log(constanteExportada);

// 6. Importa una clase

let claseExportada = new ClaseExportada("Jorge");
console.log(claseExportada.recibeNombre());

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// Resuelto en el fichero 31-modules-exercises

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

console.log(sum(40, 30));

// 9. Exporta una función, una constante y una clase desde una carpeta

// Creado en un archivo de otra carpeta the_odin_project/exportaMoure.js


// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

console.log(funcionDeOtraCarpeta());
console.log(constanteDeOtraCarpeta);
let claseDeOtraCarpeta = new ClaseDeOtraCarpeta("Jorge");
console.log(claseDeOtraCarpeta.conseguido());