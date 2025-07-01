/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 0; i <= 20; i++){
    if (i == 0){
        continue;
    }
    console.log(i);
}

console.log(" ");
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado


let i = 1;
let resultado = 0;

while (i <= 100){
    
    resultado += i;
    console.log(`resultado(${resultado})`);
    i++;

}
console.log(resultado);

console.log(" ");

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let pares = 0;

while (pares <=50){
    pares++
    if (pares % 2 == 0){    
        console.log(pares);
    }
}

console.log(" ");

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Jorge", "Miguel", "Carlos", "Daniel"];
let posiciones = ["primer", "segundo", "tercer", "cuarto"];

for (let valor of nombres){
    for (let position of posiciones){
        if (valor == nombres[0] && position == posiciones[0]){
            console.log(`El ${position} nombre es: ${valor}`);
        } else if (valor == nombres[1] && position == posiciones[1]){
            console.log(`El ${position} nombre es: ${valor}`);
        } else if (valor == nombres[2] && position == posiciones[2]){
            console.log(`El ${position} nombre es: ${valor}`);
        } else if (valor == nombres[3] && position == posiciones[3]){
            console.log(`El ${position} nombre es: ${valor}`);
        }
    }
}

console.log(" ");

// mejora
for (let i = 0; i < nombres.length; i++){
    console.log(`El ${posiciones[i]} nombre es: ${nombres[i]}`);
}

console.log(" ");
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadena = "Escribe un bucle que cuente el número de vocales de una cadena de texto";
let vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
let contador = 0;

for (let valor of cadena.toLowerCase()){
    for (let vocal of vocales){
        if (valor == vocal){
            contador++;
        }
    }
}
console.log(`En esta cadena hay ${contador} vocales.`);

console.log(" ");

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [1, 2, 3, 4, 5];
let producto = 1;

for (let valor of numeros){
    producto *= valor;
}
console.log(producto);

console.log(" ");

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 0; i < 10; i++){
    console.log(`5 x ${i} = ${i * 5}`);
}

console.log(" ");

// 8. Usa un bucle para invertir una cadena de texto

let nuevaCadena = "Usa un bucle para invertir una cadena de texto";
let arrayInvertido = [];

for (let valor of nuevaCadena){
    arrayInvertido.unshift(valor);
}
console.log(arrayInvertido.join(``));

console.log(" ");

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let primerNumero = 0;
let segundoNumero = 1;
let resultadoFibo = 0;

for (let i = 0; i < 10; i++){
    console.log(resultadoFibo);
    resultadoFibo = primerNumero + segundoNumero;
    segundoNumero = primerNumero;
    primerNumero = resultadoFibo;
}

console.log(" ");

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let arrayNumeros = [1, 3, 6, 26, 2, 57, 73, 7345, 2, 46, 3, 7, 87, 7, 9, 25];
let arrayNumerosAltos = [];

for (let valor of arrayNumeros){
    if (valor > 10){
        arrayNumerosAltos.push(valor);
    }
}
console.log(arrayNumerosAltos);