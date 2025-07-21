/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

function miError() {
    console.error("Este es un mensaje de error");
}
miError();
// 2. Crea una función que utilice warn correctamente

function miWarn() {
    console.warn("Este es un mensaje de advertencia");
}
miWarn();
// 3. Crea una función que utilice info correctamente

function miInfo() {
    console.info("Este es un mensaje informativo");
}
miInfo();
// 4. Utiliza table

let tabla = [
    ["Nombre: Jorge", "edad: 37"],
    ["Nombre: Brais", "edad: 37"]
]
console.table(tabla);

let nuevaTabla = [
    {Nombre: "Jorge", Edad: 37},
    {Nombre: "Brais", Edad: 37}
]
console.table(nuevaTabla);

// 5. Utiliza group

console.group("Estudiantes");
console.log("Nombre: Jorge", "Edad: 37");
console.log("Nombre: Irene", "Edad: 37");
console.groupEnd();

// 6. Utiliza time

console.time("Tiempo de ejecución");
console.group("Estudiantes");
console.log("Nombre: Jorge", "Edad: 37");
console.log("Nombre: Irene", "Edad: 37");
console.groupEnd();
console.timeEnd("Tiempo de ejecución");

// 7. Valida con assert si un número es positivo

let numeroPositivo = -4;

console.assert(numeroPositivo > 0, "Este número no es positivo");

// 8. Utiliza count

console.count("click");
console.count("click");
console.count("CLICK");
console.count("click");
console.count("CLICK");
console.count("click");
console.countReset("click");
console.count("CLICK");
console.count("CLICK");
console.count("CLICK");
console.countReset("CLICK");

// 9. Utiliza trace


function sum(a, b){
    console.trace("Rastro de la ejecución");
    return a + b;
}

console.log(sum(10, 12));



// 10. Utiliza clear

console.clear();
