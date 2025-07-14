// Funciones

// Declaración

function myFunction() {
    console.log("Hola, función");
}

for (let i = 0; i < 5; i++) {
    myFunction();
}

// Con parámetros

function myFunctionWithParams(name) {
    console.log(`Hola, ${name}`);
}
function myFunctionWith2Params(name, apellido) {
    console.log(`Hola, ${name} ${apellido}`);
}

myFunctionWithParams("Jorge");
myFunctionWithParams("Paco");
myFunctionWith2Params("Jorge", "Abalo");

// Funciones anónimas

const myAnonymousFunction = function(name) {
    console.log(`Hola, ${name}`);
}

myAnonymousFunction("Jorge");

// Funciones flecha. sintaxis simplificada de función anónima

const myArrowFunction = (name) => {
    console.log(`Hola, ${name}`);
}
myArrowFunction("Jorge")

// parámetros

function sum(a, b) {
    console.log(a + b);
}
sum(3, 4); // salida: 7
sum(3); // salida NaN
sum(); // salida NaN

// parámetros por defecto

function multiplicacion(a = 0, b = 0) {
    console.log(a * b);
}
multiplicacion(2, 3); // salida: 6
multiplicacion(3); // salida: 0
multiplicacion(); // salida: 0

// retorno de valores

function division(a, b) {
    return a / b;
}

let result = division(10, 2);
console.log(result);

// funciones anidadas

function external() {
    console.log("Función externa");
    function internal() {
        console.log("Función interna");
    }
    internal();
}
external();
//internal(); // ReferenceError: internal is not defined

// internal() solo existe dentro de external(), porque 
//fue declarada allí.
// Fuera de external(), no se puede llamar, porque está
//en un ámbito local (ámbito = "scope")

// funciones de orden superior

// son funciones que reciben otras funciones como argumento

function hacerTarea(tarea){
    console.log(`Mi tarea hoy va a ser...`)
    tarea();
}
function barrer(){
    console.log(`barrer la casa`);
}
function fregar(){
    console.log(`fregar la casa`);
}
hacerTarea(barrer);

// o que devuelven funciones como parámetro

function crearTarea(tarea){
    return function() {
        console.log(`Estoy ${tarea}`);
    }
}

let cocinar = crearTarea(`cocinando`);
let comer = crearTarea(`comiendo`);


cocinar();
comer();

function funcionDevuelta(parametro){
    return function(){
        console.log(`Dentro de funcionDevuelta...${parametro}`)
    }
}

let recibido = funcionDevuelta(`fuera de funcionDevuelta`);

recibido();


//Ejercicios


function nuevaTarea(tarea){
    console.log(`Estoy ${tarea()}`);
}
function estudiando(){
    return `Estudiando`;
}
nuevaTarea(estudiando);

function probamos(prueba){
    console.log("La salida tiene que ser: ")
    prueba();
}
function pasaPrueba(){
    console.log("prueba");
}
probamos(pasaPrueba);


function crearSaludo(nombre){
    return function(){
        console.log(`¡Hola, ${nombre}! ¿Cómo estás hoy?`)
    }
}

let saludoJorge = crearSaludo("Jorge");
let saludoRosa = crearSaludo("Rosa");
let saludoPepe = crearSaludo("Pepe");

saludoJorge();
saludoRosa();
saludoPepe();

function saludoPersonalizado(nombre, idioma = `es`){
    return function(){
        if (idioma == "es"){
            console.log(`¡Hola, ${nombre}! ¿Cómo estás?`);
        } else if (idioma == "en") {
            console.log(`Hello ${nombre}! How are you?`);
        }
    }
}

let nuevoSaludoJorge = saludoPersonalizado("Jorge", "es");
let nuevoSaludoPaco = saludoPersonalizado("paco", "en");

nuevoSaludoJorge();
nuevoSaludoPaco();


// forEach

let myArray = [1, 2, 3, 4];

// Ejemplo con for

for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i] * 2);
}

// Ejemplo con forEach

myArray.forEach(function(numero) {
    console.log(numero * 2);
});

// Ejemplo forEach arrow function

myArray.forEach(numero => console.log(numero * 2));
