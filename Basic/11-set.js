// set

// Declaración

let mySet = new Set(["Jorge", "Abalo", "Cordero", 37]);

console.log(mySet);

// Métodos comunes

// add y delete

mySet.add("programador"); // añade un elemento al final

console.log(mySet);

mySet.delete(37);

// Al no tener indice no se puede pedir que borre
//una posición concreta. hay que pedir que borre el
//dato
console.log(mySet);

console.log(mySet.delete("Jorge"));
console.log(mySet);
console.log(mySet.delete("raqueta"));
console.log(mySet);

// has

mySet.has()

console.log(mySet.has("Abalo"));
console.log(mySet.has("Jorge"));

// size

console.log(mySet);
console.log(mySet.size);

// convertir un set a array

let myArray = Array.from(mySet);
console.log(myArray);

// convertir un array a un set

mySet = new Set(myArray);
console.log(mySet);

// un set no admite duplicados

mySet.add("Jorge");
mySet.add("Jorge");
mySet.add("Jorge");
console.log(mySet); 
// Set(4) { 'Abalo', 'Cordero', 'programador', 'Jorge' }