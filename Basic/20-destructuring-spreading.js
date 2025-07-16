let myArray = [1, 2, 3, 4];

let person = {
    name: "Jorge",
    age: 37,
    alias: "jabaloc"
};

myArray.push(5);

let myValue = myArray[1];
console.log(myValue);

let myName = person.name;
console.log(myName);


console.log("");
// Desestructuración

// Permite extraer valores de arrays o de objetos y
//asignarlos a variables

// Sintaxis arrays

let colores = ["rojo", "verde", "azul"];

let [elRojo, elVerde = 0, elAzul = 0, elAmarillo = 0] = colores;
console.log(elRojo); // salida: rojo
console.log(elVerde); // salida: verde
console.log(elAzul); // salida: azul
console.log(elAmarillo); // salida: 0

console.log("");

// Ignorar elementos

let numeros = [1, 2, 3, 4, 5, 6];

let [numero1, numero2, , , numero5, numero6] = numeros;
console.log(numero1);
console.log(numero2);
console.log(numero5);
console.log(numero6);
// De esta manera nos saltamos los valores 3 y 4. Si no lo ponemos así almacenará
//en numero5 el valor 3 y en número 6 el valor 4


// sintaxis objetos

let persona1 = {
    nombre: "Jorge",
    edad: 37,
    correo: "jorge@hotmail.com"
};

let {nombre, edad, correo} = persona1;

console.log(nombre); // salida: Jorge
console.log(edad); // salida: 37
console.log(correo); // salida: jorge@hotmail.com

// Sintaxis de objetos con nuevos nombres de variables

let {correo: nuevoCorreo, nombre: nuevoNombre, edad: nuevaEdad} = persona1; //El orden no importa

console.log(nuevoNombre) // salida: Jorge
console.log(nuevaEdad) // salida: 37
console.log(nuevoCorreo) // salida: jorge@hotmail.com

// Desestructuración de objetos anidados

let persona2 = {
    nombre: "Jorge",
    edad: 37,
    correo: "jorge@hotmail.com",
    lenguaje: {
        nombre: "javaScript",
        nivel: "básico",
    },
    estudia() {
        console.log("Está estudiando programación");
    }
}

console.log(persona2);
persona2.estudia();

// let {nombre, lenguaje: {nombre}} = persona2; Haciendo esto da fallo, ya que 
//no se puede declarar una variable dos veces con el mismo nombre
//tendíamos que renombrar al menu una de ellas.

let {nombre: nombrePersona, lenguaje: {nombre: nombreLenguaje}} = persona2;
// He renombrado nombre ya que en otro ejercicio ya lo habíamos declarado,
//pero únicamente con renombrar uno ya valdría

console.log(nombrePersona);
console.log(nombreLenguaje);

// propagación (spreading)

// Sintaxis spreadings

let myArray1 = [1, 2, 3, 4];

let myArray2 = [...myArray1]; // copia de arrays

console.log(myArray2); // salida: [ 1, 2, 3, 4 ]

let myArray3 = [...myArray1, 5, 6];

console.log(myArray3); // salida: [ 1, 2, 3, 4, 5, 6 ]

let myArray4 = [...myArray1, ...myArray2, ...myArray3];

console.log(myArray4); // salida: [  1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6 ]

// sintaxis objetos

let objeto1 = {
    nombre: "objeto1",
    tipo: "objeto",
}

let objeto2 = {...objeto1}; // copia de objeto

console.log(objeto2); // salida: { nombre: 'objeto1', tipo: 'objeto' }

let objeto3 = {...objeto1, nombreObjeto: "objeto3"}

console.log(objeto3); // salida: { nombre: 'objeto1', tipo: 'objeto', nombreObjeto: 'objeto3' }




 



