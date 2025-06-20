/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 5;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log(" ")
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a %= b);
console.log(a **= b);

console.log(" ")
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
a = 5;
b = 10;

console.log(a < b);
console.log(b > a);
console.log(a == (b - 5));
console.log(a != b);
console.log((a + 2) === (b - 3));

console.log(" ")
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a > b);
console.log(b < a);
console.log(a == (b - 4));
console.log(a == b);
console.log((a - 2) === (b - 3));

console.log(" ")
// 5. Utiliza el operador lógico and
console.log(a < b && b > a);

console.log(" ")
// 6. Utiliza el operador lógico or
console.log(a < b || b > a);

console.log(" ")
// 7. Combina ambos operadores lógicos
console.log((a < b && b > a) || (a != b));

console.log(" ")
// 8. Añade alguna negación
console.log(!(a > b));

console.log(" ")
// 9. Utiliza el operador ternario
let imStudy = true;
imStudy ? console.log("Estoy estudiando") : console.log("No estoy estudiando");

console.log(" ")
// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log((a < b) == (b > a) && (b > a) == (a < b));