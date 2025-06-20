/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let saludo = "Hola";
let persona = "Jorge";
let frase = "Estoy en un curso de JavaScript";


console.log(`${saludo}, ${persona}.`);

// 2. Muestra la longitud de una cadena de texto
console.log(saludo.length);

// 3. Muestra el primer y último carácter de un string
console.log(saludo[0], saludo[saludo.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(`${saludo.toUpperCase()}, ${persona.toLowerCase()}`);


// 5. Crea una cadena de texto en varias líneas
console.log(`${saludo}
,
${persona}`);

// 6. Interpola el valor de una variable en un string
console.log(`${saludo}, soy ${persona}. Actualmente ${frase.toLowerCase()}.`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(frase.replace(/ /g, "-"));


// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(frase.includes("curso"));

// 9. Comprueba si dos strings son iguales
console.log(saludo === persona);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(saludo.length === persona.length);
