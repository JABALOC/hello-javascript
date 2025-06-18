/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// 1. Escribe un comentario en una línea

// 2. Escribe un comentario en varias líneas
/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myName = "Jorge Abalo";
let age = 37;
let isBoolean = true;
let myUndefined;
let myNull = null;
let mySymbol = Symbol("unico");
let myBigInt = 9809839081329081320983983198309132n;

// 4. Imprime por consola el valor de todas las variables
console.log(myName);
console.log(age);
console.log(isBoolean);
console.log(myUndefined);
console.log(myNull);
console.log(mySymbol);
console.log(myBigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myName);
console.log(typeof age);
console.log(typeof isBoolean);
console.log(typeof myUndefined);
console.log(typeof myNull);
console.log(typeof mySymbol);
console.log(typeof myBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myName = "Jorge Luis";
age = 38;
isBoolean = false;
myUndefined;
myNull = null;
mySymbol = Symbol("otroUnico");
myBigInt = 87872832323323287286278628632637263n;
console.log(myName);
console.log(age);
console.log(isBoolean);
console.log(myUndefined);
console.log(myNull);
console.log(mySymbol);
console.log(myBigInt);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myName = 9809839081329081320983983198309132n;
age = "Jorge Luis"
isBoolean = 37;
myUndefined = true;
myNull ="Ahora no es nulo";
mySymbol = "No soy un simbolo";
myBigInt = Symbol("nuevo");
console.log("Mi nombre es", myName);
console.log("Tengo", age);
console.log("Este valor es", isBoolean);
console.log("Valor indefinido", myUndefined);
console.log("valor nulo", myNull);
console.log("valor único", mySymbol);
console.log("Gran valor", myBigInt);


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myName2 = "Jorge Abalo";
const age2 = 37;
const isBoolean2 = true;
const myUndefined2 = undefined;
const myNull2 = null;
const mySymbol2 = Symbol("unico");
const myBigInt2 = 9809839081329081320983983198309132n;

// 9. A continuación, modifica los valores de las constantes
//myName2 = "Jorge Luis";
//age2 = 38;
//isBoolean2 = false;
//myUndefined2 = "definida";
//myNull2 = "not null";
//mySymbol2 = Symbol("noTanUnico");
//myBigInt2 = 5656756756568568678678678678678678678567n;
//console.log("Mi nombre es", myName2);
//console.log("Tengo", age2);
//console.log("Este valor es", isBoolean2);
//console.log("Valor indefinido", myUndefined2);
//console.log("valor nulo", myNull2);
//console.log("valor único", mySymbol2);
//console.log("Gran valor", myBigInt2);

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse