// Excepción

// produce una excepción
let myObject;
// console.log(myObject.email); // salida: TypeError: Cannot read properties of undefined (reading 'email')

// captura de errores 

// try-catch

try {
    // código que intenta ejecutar
    console.log(myObject.email); 
    console.log("Finaliza la ejecución sin errores");
} catch {
    // Bloque de error
    console.log("Se ha producido un error");
}

try {
    console.log(myObject.email); 
    // si pasamos un argumento a catch y lo imprimimos nos dice que error se ha producido
} catch (error) {
    // Al argumento error incluso podemos pedirle más detalles por ejemplo error.mensaje
    console.log("Se ha producido un error:", error.message); // salida: Se ha producido un error: Cannot read properties of undefined (reading 'email')
}

// finally

try {
    console.log(myObject.email); 
} catch (error) {
    console.log("Se ha producido un error:", error.message);
} finally {
    console.log("Este código se ejecuta siempre");
}

// lanzamiento de errores

// trhow

function sum(a, b) {
    if (typeof a === Number){
        console.log("Es instancia de número"); // Esto no se ejecuta porque a no es instancia de Number a es 5 y 5 es un dato primitivo
        //Si hacemos un console.log(typeof 5); nos dice que es un number no un Number
        //Por lo que la forma correcta de hacerlo sería poniendo:
        // if (typeof a === "number");
    }
    if (typeof a === "number"){
        console.log("Es instancia de número");
        // Esto sí ejecuta ya que a es de tipo primitivo number
    }
    if (Number.isInteger(a)){
        console.log("Es un número entero");
    }
    console.log("")
    if (Number.isNaN(a)){
        console.log("No es un número");
        // Esto no ejecuta porque si le pasamos un número es un tipo number y una cadena es un tipo string
        // Pero aquí estamos diciendo si a tiene valor NaN y en este aso a tiene valor Number
        // Para que estu fuese correcto habria que hacer que a fuese NaN por ejemplo
        // let quieroNaN = "Hola" * 2.3;
        // Aquí si funcionaría porque quieroNaN sí es un NaN
    }
    if (Number.isNaN(quieroNaN)){
        console.log("Esto sí es un NaN");
    }

    //Ahora comprobamos si a es finito
    if (Number.isFinite(a)){
        console.log("es finito");
    }
    //Ahora comprobamos si "Hola" es un número finito
    // No se ejecuta porque "Hola" no es un Number
    if (Number.isFinite(a)){
        console.log("es finito");
    }

    console.log("")
    if (a instanceof Number){
        console.log("No se pueden sumar estas propiedades");
    }
    return a + b;
    
}

console.log(typeof 5);
let quieroNaN = "Hola" * 2.3;
console.log(quieroNaN);

console.log(sum("hola", 5));

//throw new Error("Se ha producido un error");

console.log("");

// Resumen de todo esto:
// En este caso vemos que la lógica está fallando, pero el programa continua ya que no hay fallos en el código
// Por lo que para estos casos es interesante que nosotros lancemos un error para que el programa no continue
function sumIntegers(a, b){
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        console.log("No son números enteros");
    }
    return a + b;
}

console.log(sumIntegers(10, 5));
console.log(sumIntegers("10", 5));
console.log(sumIntegers(10, "5"));
console.log(sumIntegers("10", "5"));

// Repetimos la función anterior lanzando el error con throw y capturandolo con try/catch
console.log("");

function sumIntegers2(a, b){
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        // Lanzamos el error en caso de que no sean número enteros
        throw new Error("No son números enteros");
    }
    return a + b;
}

// Hacemos try para que intente ejecutar estas líneas de código
try{
    console.log(sumIntegers2(10, 5));
    console.log(sumIntegers2("10", 5));
    console.log(sumIntegers2(10, "5"));
    console.log(sumIntegers2("10", "5"));
} catch (error){
    // capturamos el error (al que hemos nombrado error) pidiendo que nos muestre el mensaje
    console.log("Se ha producido un error: ", error.message);
}
// De esta manera en la primera línea que encuentre error se detiene
// Sí quisieramos que comprobase todas las líneas habría que hacer try/catch en cada línea

// Otro ejemplo con dos tipos de errores
console.log("")

function sumNumeros(a, b){
    if (!(typeof a === "number") || !(typeof b === "number")){
        throw new Error ("No es un número");
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error ("No son números enteros");
    }
    return a + b
}

try {
    console.log(sumNumeros(5, 10));
    console.log(sumNumeros(5.5, 10));
    console.log(sumNumeros(5, 10));
    console.log(sumNumeros(5, 10));
} catch (error){
    console.log("Se ha producido un error: ", error.message);
}


// Capturar varios tipos de errores
console.log("")

function otraSumaEnteros (a, b) {
    if (!(typeof a === "number") || !(typeof b === "number")){
        throw new TypeError("No es de tipo number");
    }
    if (!(Number.isInteger(a)) || !(Number.isInteger(b))){
        throw new Error("No es un número entero");
    }
    return a + b;
}

try {
    console.log(otraSumaEnteros(10, 5));
    console.log(otraSumaEnteros(5.5, 5));
    console.log(otraSumaEnteros(10, 5));
    console.log(otraSumaEnteros(10, 5));
} catch (error){
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo: ", error.message)
    } else if(error instanceof Error) {
        console.log("Se ha producido un error: ", error.message);
    }
}

// Crear excepciones personalizadas

class MyCustomError extends Error {
    constructor (message, a, b) {
        super (message);  // llama al constructor de error
        this.a = a;       // Guarda los valores de a y b
        this.b = b;
    }
    printNumbers() {
        console.log(this.a, " + " , this.b);
    }
}


function sumaDeIntegers (a, b){
    if (a == 0 || b == 0){
        // En este punto instanciamos MyCustomerError y le pasamos:
        //                     (        message              , a, b)
        throw new MyCustomError("Estas intentando sumar cero", a, b);
        // Entonces cuando entramos en catch (error), esa variable error ya es una 
        // instancia de myCustomerError
    }
    return a + b;
}

try {
    console.log(sumaDeIntegers(4, 5));
    console.log(sumaDeIntegers(0, 4));
} catch (error) {
    console.log("Se ha producido el siguiente error: ", error.message);
    error.printNumbers();
}







