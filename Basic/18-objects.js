// objects

// todo lo que no es un dato primitivo es un objeto
// es una colección de propiedades y se estructuran con clave valor

// sintáxis

let person = {
    nombre: "Jorge",
    age: 37,
    alias: "Jabaloc"
}

// Acceso a propiedades

// con la notación punto (recomendado)
console.log(person.nombre);

// con la notación de corchetes

console.log(person["nombre"]);

// modificación de propiedades

person.nombre = "Jorge Abalo";
console.log(person.nombre)

console.log(typeof person.age);
person.age = "37";
console.log(typeof person.age);

// Eliminar propiedades

delete person.age;

console.log(person);

// Añadir una propiedad

person.email = "correo@hotmailcom";
person["age"] = 37;
console.log(person);

// Métodos (funciones)

let person2 ={
    nombre: "Jorge",
    age: 37,
    walk(){
        console.log("La persona2 está caminando");
    }
}
console.log(person2);
person2.walk();

// Anidación de objetos

let person3 = {
    nombre: "Jorge Abalo",
    age: 37,
    walk(){
        console.log("La persona anda");
    },
    job: {
        nombre: "Developer",
        exp: 0,
        work() {
            console.log("La persona está estudiando");
        }
    }
}

console.log(person3);
console.log(person3.job);
person3.job.work();

// Igualdad de objetos

// Creamos dos personas con el mismo contenido

let person4 = {
    nombre: "Jorge",
    apellido: "Abalo",
    age: 37
}

let person5 = {
    nombre: "Jorge",
    apellido: "Abalo",
    age: 37
}

console.log(person4 == person5); // salida: false
console.log(person4 === person5); // salida: false

// El resultado es false porque en el caso de los objetos, estos no se guardan
// como un valor asociado, sino como una referencia
// Entonces, lo que se compara es la referencia de los objetos.

console.log(person4.nombre == person5.nombre); // salida: true

// Iteración

for (let key in person5){
    console.log(key + ": " + person5[key]);
}

let personaEjemplo = {
    nombre: "Antonio",
    edad: 45,
    correo: "antonioCorreo@hotmail.com",
    trabajo(){
        console.log("Reponedor");
    },
    hobby(){
        console.log("Jugar a la consola");
    }
}

console.log(personaEjemplo);
personaEjemplo.hobby();

for (let clave in personaEjemplo){
    console.log(clave + ": " + personaEjemplo[clave]);
}

// Acceder a las propiedades dentro de un objeto

let personaEjemplo2 = {
    nombre: "María",
    edad: 32,
    correo: "maria@hotmail.com",
    work(){
        // para acceder a una propiedad hay que usar this.propiedad
        console.log(`${this.nombre} es programadora`);
    }
}

personaEjemplo2.work();

let personaEjemplo3 = {
    nombre: "María",
    edad: 32,
    correo: "maria@hotmail.com",
    job: {
        funcion: "programador",
        exp: 15,
        work(){
            console.log(`${this.nombre} es programadora`);
        }
    }
}

personaEjemplo3.job.work(); // salida: undefined es programadora
// esto ocurre porque falta la referencia al objeto superior.

// Funciones como objetos

function persona(name, age) { // esto no es una buena práctica. Debería ser una clase
    this.name = name;
    this.age = age;
}

let person6 = new persona("Patricia", 56);
console.log(person6);

console.log(typeof person4);
console.log(typeof person6);



