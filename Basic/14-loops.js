// Loops o bucles

// Es una estructura de control que permite repetir un bloque de código.

// for

for (let i = 0; i < 5; i++){
    console.log(`Hola ${i}`);
}

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`);
}

// while

// Se evalua antes de cada iteración

let i = 0;

while (i < 5) {
    console.log(`Hola ${i}`);
    i++
}

// bucle infinito

/* while (true){
    Como true no cambia, este bucle es infinito
}  */
console.log(" ");
// do while
// Bucle que se ejecuta mínimo una vez

i = 0;

do {
    console.log(`Hola ${i}`);
    i++
} while (i < 5);

// for of 
// Sirve para recorrer valores de algo que sea iterable
console.log("for of");

let miArray = [1, 2, 3, 4, 5];

let miSet = new Set(["perro", "gato", "pato"]);

let miMap = new Map([
    [`nombre`, `Jorge`],
    [`apellido`, `Abalo`],
    [`mail`, `correo123@hotmail.com`]
]);

let miString = ("Hola, JavaScript");


for (let valor of miArray) {
    console.log(valor);
}

for (let valor of miSet){
    console.log(valor);
}

for (let valor of miMap){
    console.log(valor);
}

for (let valor of miString){
    console.log(valor);
}

console.log(" ")
// buenas prácticas

// break y continue

// si queremos que se salte una iteración usamos continue

for (i = 0; i < 10; i++){
    if (i == 5){
        continue;
    } else if (i == 7){
        break;
    }
    console.log(`Elemento ${i}`);
}

