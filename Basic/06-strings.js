// Strings

let myName = "Jorge";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud
console.log(greeting.length); //Esto es un método

// Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[11]);

// Métodos comunes
console.log(greeting.toUpperCase()); //Cambia todas las letras a mayuscula
console.log(greeting.toLowerCase()); //Cambia todas las letras a minuscula
console.log(greeting.indexOf("Jorge")); //Encuentra la palabra "Jorge" en la posición 6
console.log(greeting.indexOf("Hola")); //Encuentra la palabra "Jorge" en la posición 0
console.log(greeting.indexOf("jamón")); //resultado -1 quiere decir que no ha encontrado esta palabra
console.log(greeting.includes("Jorge")); //¿Incluye Jorge? true
console.log(greeting.includes("Hola")); //¿Incluye Hola? true
console.log(greeting.includes("Jamón")); //¿Incluye Jamón? false
console.log(greeting.slice(0, 10)); //Esto imprime solo desde la posición 0 a la 9, no incluye la posición final (Hola, Jorg)
console.log(greeting.replace("Jorge", "Jabaloc")); //Reemplaza una palabra por otra

// Template literals (plantillas literales)
// Se escriben usando backticks (acento)` en lugar de comillas simples' ' o dobles " "
// Permiten incluir variables y expresiones directamente dentro del texto, susando ${...}
// Permiten escribir textos de varias líneas sin usar caracteres especiales (/n)

let edad = 37;

console.log(`Hola, mi nombre es ${myName} y tengo ${edad} años.`);

console.log(`La suma de 5 + 5 es igual a ${5 + 5}`);

console.log(`Primera línea
Segunda línea
Tercera línea`);


