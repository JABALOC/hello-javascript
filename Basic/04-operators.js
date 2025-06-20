// Operadores

// Operadores Aritméticos

let a = 5;
let b = 10

console.log(a + b); //Suma
console.log(a - b); //Resta
console.log(a * b); //Multiplicación
console.log(a / b); //División

console.log(a % b); //Módulo
console.log(a ** b); //Exponente

a++
console.log(a); //Incremento
b--
console.log(b); //Decremento

//Operadores de asignación

let myVariable = 2; //Esto es un operador de asignación (asignamos un 2 a la variable a myVariable)
console.log(myVariable);
myVariable = myVariable + 2;
console.log(myVariable);

//Forma resumida
myVariable -= 2;
myVariable *= 2;
myVariable /= 2;
myVariable %= 2;
myVariable **= 2;

//Operadores de comparación

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); //Igualdad por valor
console.log(a == a); //Igualdad por valor
console.log(a); //a = 6
console.log(a === a); //Igualdad por identidad (tipo y valor)
console.log(a === "6");

console.log(a != 6); //compara valor, no el tipo
console.log(a !== "6"); //compara el valor y el tipo

console.log("")

//comparadores especiales

console.log(0 == false);
console.log(1 == false);
console.log(2 == false);
console.log(0 == "");
console.log(0 == " ")
console.log(0 == '');
console.log(0 == "Hola");
console.log(0 === "");
console.log(undefined == null);
console.log(undefined === null);

console.log(" ")
// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20); // Si las dos son falsas esto es false
console.log(5 < 10 && 15 < 20); // true
console.log(5 < 10 && 15 > 20); // false, ya que una de las dos es falsa

console.log(" ")

// or (||)
console.log(5 > 10 || 15 > 20); // Si las dos son falsas esto es false
console.log(5 < 10 || 15 < 20); // true
console.log(5 < 10 || 15 > 20); // true, ya que una de las dos se cumple

console.log(" ")

// not (!)
console.log(5 > 10 && 15 > 20); //false
console.log(5 > 10 || 15 > 20); //false
console.log(!(5 > 10 && 15 > 20)); //Primero se evalua el parentesis interior, que es false y despues se invierte el valor con !
console.log(!(5 > 10 || 15 > 20)); //Primero se evalua el parentesis interior, que es false y despues se invierte el valor con !

console.log("")

// operadores ternarios

// si se cumple algo hace una cosa y si no se cumple hace otra
let isRaining = true;
isRaining ? console.log("Está lloviendo") : console.log("no está lloviendo");
isRaining = false;
isRaining ? console.log("Está lloviendo") : console.log("no está lloviendo");

console.log(" ");
console.log(5 += 2);


