/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b){
    return a + b;
}
let resultado = suma(3, 5);
console.log(resultado);

console.log(" ")
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let arrayNumeros = [3, 4, 6, 18, 43, 5, 10, 105];
let numeroMasAlto = 0;

for (let i = 0; i < arrayNumeros.length; i++){
    if (arrayNumeros[i] > numeroMasAlto){
        numeroMasAlto = arrayNumeros[i];
        console.log(arrayNumeros);
        console.log(numeroMasAlto);
    }
}
console.log(numeroMasAlto);

console.log(" ");
console.log("Ahora con forEach");
console.log(" ");

numeroMasAlto = 0;

arrayNumeros.forEach(numero => {
    if (numeroMasAlto < numero){
        numeroMasAlto = numero
    }
});

console.log(numeroMasAlto);

console.log(" ");
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let miFrase = "Crea una función que reciba un string y devuelva el número de vocales que contiene";
let vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
let contador = 0;
let arrayConFrase = [];

arrayConFrase = miFrase.split("");

function devuelveVocales(frase){
    contador = 0;
    frase.forEach(letras => {
        for (let letra of vocales){
            if (letras == letra){
                contador++;
            }
        }
    })
    
    console.log(contador);
}
devuelveVocales(arrayConFrase);

console.log(" ");
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let arrayDeStrings = ["hola Jorge", "estudio JavaScript", "hoy es lunes"];
let arrayDevuelto = [];

function recibeArray(arrayRecibido){
    arrayDevuelto = arrayRecibido.map(palabra => palabra.toUpperCase());
    
    return arrayDevuelto;
    
}

recibeArray(arrayDeStrings)
console.log(arrayDevuelto);

console.log(" ");
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(numero) {
  if (numero <= 1) return console.log("no es primo"); 

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return console.log("no es primo"); 
    }
  }

  return console.log("es primo"); 
}

esPrimo(4);

console.log(" ");
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let nuevoArray = [];
let array1 = ["Jorge", "Abalo", "correo@hotmail.com", "pájaro", "razón"];
let array2 = ["Jorge", "Abalo", "festival", "programación", "razón"];

function recibeDosArrays(recibir1, recibir2){
    for (let separa1 of recibir1){
        console.log(separa1);
        for (let separa2 of recibir2){
        console.log(separa2);
            if (separa1 === separa2){
                nuevoArray.push(separa1);
            }
        }
    }
    return nuevoArray;
    
    
}

recibeDosArrays(array1, array2);
console.log(nuevoArray);





console.log("EJERCICIO 7 ");
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let arrayNumeros1 = [3, 2, 6, 8, 5, 3, 4];
let arrayNumeros2 = [4, 5, 7, 9, 5, 3, 4, 5, 6];
let nuevoArrayNumeros = [];
let sumaasd = 0;

function devuelveSuma(primerArray, segundoArray){
    nuevoArrayNumeros = [];
    sumaasd = 0;
    for (let numero of primerArray){
        console.log(numero);
        if (numero % 2 == 0){
            nuevoArrayNumeros.push(numero);
            console.log(nuevoArrayNumeros);
        }
    }
    for (let numero of segundoArray){
        if (numero % 2 == 0){
            nuevoArrayNumeros.push(numero);
        }
    }
    for (let numero of nuevoArrayNumeros){
        sumaasd += numero;
    }
    return sumaasd;
}

devuelveSuma(arrayNumeros1, arrayNumeros2);
console.log(`La solución es : ${sumaasd}`);
devuelveSuma(arrayNumeros1, arrayNumeros2);
console.log(sumaasd);

console.log(" ");
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let arrayAlCuadrado = [];

function recibeArrayNumeros(arrayRecibido){
    arrayAlCuadrado = [];
    for (let numero of arrayRecibido){
        numero = numero ** 2;
        arrayAlCuadrado.push(numero);
    }
    return arrayAlCuadrado;
}

recibeArrayNumeros(arrayNumeros1);
console.log(arrayAlCuadrado);

console.log(" ");
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let cadenaTexto = "Crea una función que recibe una cadena de texto y devuelva la misma cadena con las palabras en orden inverso";
let cadenaNueva = [];

function devuelveCadena(cadena){
    for (let letra of cadena){
        console.log(letra)
        cadenaNueva.unshift(letra);
    }
    cadenaTexto = cadenaNueva.join("");
    return cadenaNueva;
}

devuelveCadena(cadenaTexto);
console.log(cadenaTexto);

console.log(" ");
console.log("Ejercicio corregido");
console.log(" ");

let otraCadenaTexto = "Crea una función que recibe una cadena de texto y devuelva la misma cadena con las palabras en orden inverso";

function devuelveCadena2(cadena){
    return cadena.split(" ").reverse().join(" ");
}

let cadenaInversa = devuelveCadena2(otraCadenaTexto);
console.log(cadenaInversa);


console.log(" ");
// 10. Crea una función que calcule el factorial de un número dado

let acumulado = [];
let factorial = 1;

function factorialNumero(numero){
    acumulado = [];
    factorial = 1;
    for (let i = numero; i > 0; i--){
        acumulado.push(i);
    }
    for (let num of acumulado){
            factorial *= num;
        }
    return factorial;
}

factorialNumero(6);
console.log(factorial);
















