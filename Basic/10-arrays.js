// arrays

// Declaración

let myArray = []; //Esta es la recomendada
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

myArray = [1];
myArray2 = new Array(1);  //salida: [ <1 empty item> ]
//Esto quiere decir que ha reservado un hueco
//en este array, no como en myArray = [1]; que ha 
//rellenado el primer hueco del array con un 1


console.log(myArray);
console.log(myArray2);

// Métodos comunes

myArray = [];

//Push y pop

myArray.push("Jorge");
myArray.push("Abalo");
myArray.push("Cordero");
myArray.push(37);

console.log(myArray);
// salida: [ 'Jorge', 'Abalo', 'Cordero', 37 ]

myArray.pop();
myArray.pop();

console.log(myArray);

// salida: [ 'Jorge', 'Abalo' ]
// .pop() elimina el último elemento del array
// Pero no solo lo elimina, también lo devuelve
// Por si lo queremos guardar un una nueva variable.

let myArrayEjemplo = ["pera", "manzana", "plátano", "naranja"];
let frutaEliminada = [];

let otraFruta = myArrayEjemplo.pop();
frutaEliminada.push(otraFruta);

console.log(frutaEliminada); // [ 'naranja' ]

otraFruta = myArrayEjemplo.pop();
frutaEliminada.push(otraFruta);  // [ 'naranja', 'plátano' ]

console.log(frutaEliminada);

// .push añade un elemento al final de un array
 myArray.push("Cordero");
 console.log(myArray); // [ 'Jorge', 'Abalo', 'Cordero' ]

 // shift y unshift

 // .shift elimina el primer elemento 
 // del array y lo devuelve
 
let devuelve = [];

devuelve = myArray.shift();
console.log(devuelve);

// unshift añade elementos al principo del array
myArrayEjemplo.unshift("platano", "naranja");
console.log(myArrayEjemplo); // [ 'platano', 'naranja', 'pera', 'manzana' ]

// length

// Nos dice la cantidad de elementos de un array
console.log(myArrayEjemplo.length);

// clear
// Maneras de limpiar un array

myArray = [];
myArray.length = 0; //alternativa

console.log(myArray); // salida: []

// slice

myArray.push("Jorge", "Abalo", "Cordero", 37)

let myNewArray = myArray.slice(1, 2);
console.log(myNewArray); // salida: Abalo
// .slice(1, 2) devuelve desde el primer parámetro
// al segundo sin incluir este último.

// splice

myArray.splice(1, 3);
console.log(myArray);
// Esto deja la posición 1 y elimina las 3 restantes

myArray = ["Jorge", "Abalo", "Cordero", 37];
myArray.splice(2, 3, "Nuevo dato");
console.log(myArray);

