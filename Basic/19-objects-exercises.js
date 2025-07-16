/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let persona1 = {
    nombre: "Jorge",
    edad: 37,
    estudios: "DAW"
}

console.log("");
// 2. Accede y muestra su valor
console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.edad);

console.log("");
// 3. Agrega una nueva propiedad

persona1.correo = "jorge@hotmail.com";

console.log(persona1);

console.log("");
// 4. Elimina una de las 3 primeras propiedades

delete persona1.estudios;

console.log(persona1);

console.log("");
// 5. Agrega una función e invócala

persona1.comer = function comer(){
    console.log("La persona1 está comiendo");
}
    
console.log(persona1);
persona1.comer();

console.log("");
// 6. Itera las propiedades del objeto

persona1.estudios = "DAW";

for (let clave in persona1){
    console.log(clave + ": " + persona1[clave]);
}

console.log("");
// 7. Crea un objeto anidado

persona1.lenguajes = {
    lenguaje1: "javaScript",
    lenguaje2: "java",
    lenguaje3: "python"
}

persona1.estudios = {
    primero: "ESO",
    segundo: "Acceso para mayores de 25 a la universidad",
    tercero: "DAW"
}

console.log(persona1);

console.log("");
// 8. Accede y muestra el valor de las propiedades anidadas

console.log(persona1.lenguajes.lenguaje1)

console.log("");

for (let clave in persona1.lenguajes){
    console.log(`He aprendido:`);
    console.log(persona1.lenguajes[clave]);
}

console.log("");
// 9. Comprueba si los dos objetos creados son iguales

let persona2 = {
    correo: 'jorge@hotmail.com',
    comer() {
        console.log("La persona està comiendo");
    },
    nombre: 'Jorge',
    edad: 37,
    estudios: {
        primero: 'ESO',
        segundo: 'Acceso para mayores de 25 a la universidad',
        tercero: 'DAW'
    },
    lenguajes: { 
        lenguaje1: 'javaScript', lenguaje2: 'java', lenguaje3: 'python' 
    }
}

console.log(persona1, persona2);

console.log("");

console.log(persona1 == persona2);
console.log(persona1 === persona2);
console.log(persona1.nombre === persona2.nombre);


console.log("");
// 10. Comprueba si dos propiedades diferentes son iguales

console.log(persona1.nombre == persona1.edad);
console.log(persona1.nombre === persona1.edad);