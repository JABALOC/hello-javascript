// Console

// log

console.log("Se usa para imprimir cualquier parte de información");

// error

console.error("Este es un mensaje de error");
console.error("Error al conectarse a la base de datos: ", new Error("Conexión fallida"));

// warn

console.log("Este es un mensaje de advertencia");

//

console.info("Este es un mensaje de información adicional")

// table

let data = [
    ["Brais", 37],
    ["Jorge", 37]
]

console.table(data);

data = [
    {nombre: "Brais", edad: 37},
    {nombre: "Jorge", edad: 37}
]

console.table(data);

// group 

console.group("Usuario:");
console.log("Nombre: Jorge");
console.log("Edad: 37");
console.groupEnd();

// time
// Se usa para medir el tiempo que tarda un grupo de código en ejecutarse

console.time("Tiempo de ejecución");

for (let i = 0; i < 10000; i++){

}

console.timeEnd("Tiempo de ejecución"); // Hay que cerrar con el mismo nombre con el que se abre

// Se pueden hacer mediciones en paralelo

console.time("Tiempo de ejecución 1");

for (let i = 0; i < 10000; i++){

}
console.time("Tiempo de ejecución 2");

for (let i = 0; i < 10000; i++){

}
console.timeEnd("Tiempo de ejecución 2");
for (let i = 0; i < 10000; i++){

}
console.timeEnd("Tiempo de ejecución 1");

// assert (Muestra mensaje de error si lo que evalua es falso)

let age = 18;
console.assert(age >= 18, "El usuario debe ser mayor de edad"); // Hay que poner condición y mensaje
// Como este se cumple, no muestra nada
console.assert(age <= 17, "El usuario debe ser mayor de edad"); // Assertion failed: El usuario debe ser mayor de edad

// count (Cuenta cantidad de veces que se ha llamado con una etiqueta especifica)

console.count("click"); // salida: click: 1
console.count("click"); // salida: click: 2
console.count("click"); // salida: click: 3
console.countReset("click");
console.count("click"); // salida: click: 1

// trace (seguimiento pila de ejecución)

function funcA() {
    funcB();
}

function funcB() {
    console.trace("Seguimiento de la ejecución");
}

funcA();
// Empieza desde más abajo hacia arriba:
// salida:
// Trace: Seguimiento de la ejecución
//     at funcB (file:///c:/Users/mabal/Desktop/CursoAplicacionesWeb/mouredev/hello-javascript/Basic/26-console.methods.js:94:13)   //Ejecuta la función B
//     at funcA (file:///c:/Users/mabal/Desktop/CursoAplicacionesWeb/mouredev/hello-javascript/Basic/26-console.methods.js:90:5)    //Ejecuta la función A y llama a la B
//     at file:///c:/Users/mabal/Desktop/CursoAplicacionesWeb/mouredev/hello-javascript/Basic/26-console.methods.js:97:1            //llama a la función A
//     at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
//     at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
//     at async loadESM (node:internal/process/esm_loader:28:7)
//     at async handleMainPromise (node:internal/modules/run_main:113:12)

// clear

console.clear();