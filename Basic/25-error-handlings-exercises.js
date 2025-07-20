/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

try {
    console.log(multiplica(3, 5));
} catch (error){
    console.log("Se ha producido un error: ", error.message);
} 

console.log("");
// 2. Captura una excepción utilizando try-catch y finally

try {
    console.log(multiplica(3, 5));
} catch (error){
    console.log("Se ha producido un error: ", error.message);
} finally {
    console.log("Continuamos ejecutando el programa");
}

console.log("");
// 3. Lanza una excepción genérica

function resta (a, b){
    if (!(typeof a === "number") || !(typeof b === "number")){
        throw new Error("No son números");
    }
    return a - b;
}

try{
    console.log(resta("a", 4));
} catch (error) {
    console.log("Se ha producido el siguiente error: ", error.message);
}

console.log("");
// 4. Crea una excepción personalizada

class MiExcepción extends Error {

    constructor (message, a, b){
        super (message);
        this.a = a;
        this.b = b;

    }
    funcionDeExcepcion(){
        return `${this.a} es de tipo ${typeof this.a} y ${this.b} es de tipo ${typeof this.b}`;
    }
}

function mult (a, b){
    if (!(Number.isInteger(a)) || !(Number.isInteger(b))){
        throw new MiExcepción ("No son números enteros", a, b);
        
    }
    return a * b;
}

console.log("");
// 5. Lanza una excepción personalizada

try {
    console.log(mult("3", 5));
} catch (error) {
    console.log("Se ha producido el siguiente error: ", error.message);
    console.log(error.funcionDeExcepcion());
}


console.log("");
// 6. Lanza varias excepciones según una lógica definida

function excepciones(a, b){
    if (!(typeof a == "number") || !(typeof b == "number")){
        throw new Error("No son números");
    }
    if (!(Number.isInteger(a)) || !(Number.isInteger(b))){
        throw new TypeError("No son de tipo entero", a, b);
    }
    
}

try {
    console.log(excepciones (5.5, 4));
} catch (error) {
    if (error instanceof TypeError){
        console.log("Se ha producido el siguiente error de tipo: ", error.message);
    } else if (error instanceof Error){
        console.log("Se ha producido el siguiente error: ", error.message);
    }
    
}

console.log("");
// 7. Captura varias excepciones en un mismo try-catch

console.log("Ejercicio 7");

for (let i = 0; i < 3; i++){
    try {
        switch (i){
            case 0: 
                multiplicacion();
                console.log("Hola");
                break;
            case 1:
                console.log(NaN(4));
                console.log("Hola");
                break;
            case 2:
                console.log(mult(3, 4.4));
                console.log("Hola");
                break;
            default:
                console.log("Ningún caso coincide");
                break;
        } 

        
    
    } catch (error){
        if (error instanceof ReferenceError) {
            console.log("Se ha producido el siguiente error: ", error.message);
        } else if (error instanceof TypeError) {
            console.log("Se ha producido el siguiente error: ", error.message);
        } else if (error instanceof MiExcepción) {
            console.log("Se ha producido el siguiente error: ", error.message);
        }
        console.log()
    }
}


    


console.log("");
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
console.log("Ejercicio 8");

let numero = 3;
let booleano = true;
let cadena = "Hola";
let indefinido = undefined;
let nulo = null;
let arrayDatos = [numero, booleano, cadena, indefinido, nulo];



function float(entrada) {
    
    console.log(entrada);
    if (isNaN(parseFloat(entrada))){
        throw new MiExcepción(`"${entrada}" es de tipo "${typeof entrada}". No es un número`);
    }
}


for (let transformar of arrayDatos) {
    try{
        float(transformar);
    } catch (error){
        console.log(`Se ha producido el siguiente error: `, error.message);
    }
    
} 



console.log("");
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
console.log("Ejercicio 9");

let persona = {
    nombre: "Jorge",
    edad: 37,
    correo: "jorge@hotmail.com"
};

function comprueba(propiedad){
    let sal = true;
    try {
        if (sal == true){
            for (let objeto in persona){
                console.log(`La propiead del objeto persona es ${objeto}`)
                console.log(`La entrada es ${propiedad} y lo comparamos con ${objeto}`);
                if (objeto != propiedad) {
                    sal = false;
                    console.log("si no coinciden sal tiene que ser false");
                    console.log(`sal ahora es ${sal}`);
                    console.log("");
                }else if (objeto == propiedad){
                    console.log(`objeto = ${objeto} y propiedad = ${propiedad}`);
                    sal = true;
                    console.log(`sal ahora es ${sal}`);
                    break;
                }
            }
        }
        console.log("continuamos");
        console.log(sal);
            
        if (sal == false){
            console.log("capturamos error");
            throw new MiExcepción (`La propiedad ${propiedad} no se encuentra en el objeto persona`);
        }
    }catch (error) {
            console.log(`Se ha producido el siguiente error: `, error.message);
    }
}

comprueba("apellido");



console.log("");
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

let intentos;



function reintentar(){
    intentos = 1;
    
    for (let i = 0; i < 10; i++){
        console.log(`Intento número ${intentos}`)
        try{
            intentos++;
            entrada();
        } catch (error) {
            console.log("Se ha producido el siguiente error: ", error.message);
        }
    }
}

reintentar();