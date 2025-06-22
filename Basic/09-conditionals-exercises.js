/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let miNombre = 1;

if (miNombre == 0){
    console.log("Jorge");
} else {
    console.log("No es mi nombre");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let password = "password";
let usuario = "Jorge";

if (usuario == "Jorge" && password == "password"){
    console.log("Usuario y contraseña correctos.");
} else {
    console.log("Prueba otra vez");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let compruebaNumero = -1;

if (compruebaNumero > 0){
    console.log("Número positivo");
} else if (compruebaNumero == 0){
    console.log("El número es 0");
}else {
    console.log("El número es negativo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 22;
let permitido = 18;
let operacion = permitido - edad;

if (edad >= 18){
    console.log("eres mayor de edad, puedes votar.");
} else{
    console.log(`No puedes votar, te faltan ${operacion} años.`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const queSoy = edad > 18 ? "adulto" : "menor";
console.log(queSoy);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 8;

if (mes >= 2 && mes < 5){
    console.log("Es primavera");
} else if (mes >=5 && mes < 8){
    console.log("Es verano");
} else if (mes >=8 && mes < 12){
    console.log("Es otoño");
} else if (mes === 12 || mes === 0 || mes === 1){
    console.log("Es invierno");
} else {
    console.log("No has introducido un número de mes válido.");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11){
    console.log(`31 días`);
} else if (mes == 1){
    console.log(`28 días`);
} else {
    console.log(`30 días`);
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = 4;
let miIdioma;

switch (idioma){
    case 0:
        miIdioma = "Hola";
        break;
    case 1:
        miIdioma = "Hello";
        break;
    case 2:
        miIdioma = "Hallo";
        break;
    case 3:
        miIdioma = "Olá";
        break;
    default:
        miIdioma = "No reconozco ese idioma";
}
console.log(miIdioma);

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let estacion;

switch (mes){
    case 0: case 1: case 11:
        estacion = "invierno"
        break;
    case 2: case 3: case 4:
        estacion = "primavera"
        break;
    case 5: case 6: case 7:
        estacion = "verano"
        break;
    case 8: case 9: case 10:
        estacion = "otoño"
        break;
    default:
        estacion = "Ese mes no es válido."
}
console.log(estacion);

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let tieneDias;

switch (mes){
    case 0: case 2: case 4: case 6: case 7: case 9: case 11:
        tieneDias = "Tiene 31 días";
        break;
    case 1:
        tieneDias = "Tiene 28 días";
        break;
    case 3: case 5: case 8: case 10:
        tieneDias = "Tiene 30 días";
        break;
    default:
        tieneDias = "Tienes que introducir un mes válido";
}
console.log(tieneDias);