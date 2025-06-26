/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = ["pato", "tortuga", "perro", "gato", "oveja"];
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final

animales.push("canguro");
animales.unshift("canario");
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2,1);
console.log(animales);

// 4. Crea un set que almacene cinco libros

let misLibros = new Set (["libro1", "libro2", "libro3", "libro4", "libro5"]);
console.log(misLibros);

// 5. Añade dos más. Uno de ellos repetido

misLibros.add("libro1"), misLibros.add("libro6");
console.log(misLibros);

// 6. Elimina uno concreto a tu elección

misLibros.delete("libro3");
console.log(misLibros);

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"],
])
console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(meses.has(5));
console.log(meses.get(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set("verano", ["Junio", "julio", "Agosto"]);
console.log(meses);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let miArray = ["JavaScript", "HTML", "CSS"];
console.log(miArray);

miArray = new Set(miArray);
console.log(miArray);

let miMap = new Map([
    ["Lenguajes", miArray]
]);
console.log(miMap);