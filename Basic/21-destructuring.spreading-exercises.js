/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let miArray = [1, 2, 3, 4 ];

let [numero1, numero2] = miArray;
console.log(numero1 + ", " + numero2);

console.log("");
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [num1, num2, num3, num4, num5 = 0] = miArray;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);

console.log("");
// 3. Usa desestructuración para extraer dos propiedades de un objeto

let objeto = {
    nombre: "Jorge",
    edad: 37,
    correo: "jorge@hotmail.es"
}

let {nombre, edad} = objeto;

console.log(nombre);
console.log(edad);


console.log("");
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {nombre: nuevoNombre, edad: nuevaEdad} = objeto;

console.log(nuevoNombre);
console.log(nuevaEdad);

console.log("");
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let objeto1 = {
    nombre: "Jorge",
    edad: 37,
    correo: "jorge@hotmail.es",
    lenguajes: {
        lenguaje1: "javaScript",
        lenguaje2: "java"
    }
}

let {lenguajes: {lenguaje1, lenguaje2}} = objeto1;

console.log(lenguaje1);
console.log(lenguaje2);

console.log("");
// 6. Usa propagación para combinar dos arrays en uno nuevo

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

let array3 = [...array1, ...array2];

console.log(array3);

console.log("");
// 7. Usa propagación para crear una copia de un array

let array4 = [...array1];

console.log(array4);

console.log("");
// 8. Usa propagación para combinar dos objetos en uno nuevo

let objeto2 = {
    nombre1: "objeto2"
};
let objeto3 = {
    nombre2: "objeto3"
};

let objeto4 ={...objeto2, ...objeto3};

console.log(objeto4);

console.log("");
// 9. Usa propagación para crear una copia de un objeto

let objeto5 = {...objeto2};

console.log(objeto5);

console.log("");
// 10. Combina desestructuración y propagación

let combinacion = {
    nombre: "objeto1",
    tipo: "objeto"
};

let {nombre: nombreCombinado, tipo: tipoCombinado} = combinacion;

let objetoCombinado2 = {...combinacion};

console.log(objetoCombinado2);