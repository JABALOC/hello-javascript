/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Persona {

    constructor({nombre = "sin definir", edad = "sin definir"} = {}){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        return `Hola soy ${this.nombre} y tengo ${this.edad} años.`;
    }
    static metodoEstatico(){
        console.log(`Hola soy un método estático`);
    }
}

let persona1 = new Persona ({nombre: "Jorge", edad: 37});
console.log(persona1);

console.log("");
// 2. Añade un método a la clase que utilice las propiedades

console.log(persona1.saludar());

console.log("");
// 3. Muestra los valores de las propiedades e invoca a la función

console.log(persona1);
console.log(persona1.saludar());

console.log("");
// 4. Añade un método estático a la primera clase

Persona.metodoEstatico();

console.log("");
// 5. Haz uso del método estático

Persona.metodoEstatico();

console.log("");
// 6. Crea una clase que haga uso de herencia

class Estudiante extends Persona {

    estudio() {
        return `Soy ${this.nombre} y estoy estudiando programación`;
    }
}

let persona2 = new Estudiante({nombre: "Jorge", edad: 37});
console.log(persona2.estudio());

console.log("");
// 7. Crea una clase que haga uso de getters y setters

class Programador extends Persona {

    #lenguaje1
    #lenguaje2
    #lenguaje3

    constructor({nombre = "sin nombre", edad = "sin edad", lenguaje1 = "javaScript", lenguaje2 = "java", lenguaje3 = "python"} = {}){
        super({nombre, edad});
        this.#lenguaje1 = lenguaje1;
        this.#lenguaje2 = lenguaje2;
        this.#lenguaje3 = lenguaje3;
    }

    get lenguaje1(){
        return `He aprendido ${this.#lenguaje1}`;
    }
    set lenguaje2(nuevoLenguaje){
        this.#lenguaje2 = nuevoLenguaje;
    }
    get lenguaje2(){
        return `Ahora es ${this.#lenguaje2}`;
    }
    
}

let soyProgramador = new Programador({nombre: "Jorge", edad: 37});
console.log(soyProgramador);
console.log(soyProgramador.lenguaje1);
soyProgramador.lenguaje2 = "Ciberseguridad";
console.log(soyProgramador.lenguaje2);


class Conductor extends Persona {

    constructor({nombre = "sin definir", edad = "sin definir", carnet = "no"} = {}) {
        super ({nombre, edad})
        this.carnet = carnet;
    }
    set carnetConducir(tieneCarnet){
        this.carnet = tieneCarnet;
    }
    get carnetConducir(){
        console.log(this.carnet);
        if (this.carnet === "si" && this.edad > 18){
            return `${this.nombre} tiene carnet`
        } else if (this.edad < 18){
            return `${this.nombre} no puede tener carnet, es menor de edad`
        } else {
            return `${this.nombre} no tiene carnet`
        }
    }
}

let nuevoConductor = new Conductor ({nombre: "Jorge", edad: 14});
console.log(nuevoConductor);
nuevoConductor.carnetConducir = "si";
console.log(nuevoConductor.carnetConducir);

console.log("");
// 8. Modifica la clase con getters y setters para que use propiedades privadas

class ClasesPrivadas {

    #nombre

    constructor({nombre = "Jorge"} = {}) {
        this.#nombre = nombre;
    }
    get nombre(){
        return `Tu nombre es ${this.#nombre}`;
    }
    set nombre(indicaTuNombre) {
        this.#nombre = indicaTuNombre;
    }
}

let miClase = new ClasesPrivadas ({nombre: "Jorge"});

console.log(miClase.nombre);
miClase.nombre = "Victor";
console.log(miClase.nombre);

console.log("");
// 9. Utiliza los get y set y muestra sus valores

class OtroEjemplo extends Persona{

    #lenguaje

    constructor ({nombre = "sin definir", edad = "sin definir", lenguaje = "sin definir"} = {}){
        super ({nombre, edad});
        this.#lenguaje = lenguaje;
    }
    set lenguaje(nuevoLenguaje){
        this.#lenguaje = nuevoLenguaje;
    }
    get lenguaje(){
        return `Tienes conocimientos de ${this.#lenguaje}`;
    }
    programar(){
        return `${this.nombre} está programando`;
    }
}

let nuevaPersona = new OtroEjemplo ({lenguaje: "python"});

console.log(nuevaPersona.lenguaje);
nuevaPersona.lenguaje = "JavaScript";
console.log(nuevaPersona.lenguaje);


console.log("");
// 10. Sobrescribe un método de una clase que utilice herencia 

class ClaseHeredada extends OtroEjemplo {

    constructor({nombre, edad, lenguaje } = {}) {
        super ({nombre, edad, lenguaje});
    }
    programar() {
        return `${this.nombre}, te queda poco para terminar este curso`
    }
}

let claseHeredada = new ClaseHeredada ({});

 claseHeredada.lenguaje = "JavaScript"
console.log(claseHeredada, claseHeredada.lenguaje);
claseHeredada.nombre = "Jorge"
nuevaPersona.nombre = "Jorge"
console.log(nuevaPersona.programar());
console.log(claseHeredada.programar());
