// Clases

// son objetos complejos
// sirven para crear plantillas de objetos

// los valores se dan cuando creamos las instancias

// Sintaxis

class Person {

    constructor (nombre, edad, alias){
        this.nombre = nombre;
        this.edad = edad;
        this.alias = alias;
    }
}

let persona1 = new Person ("Jorge", 37, "jabaloc");
console.log(persona1);

console.log(typeof persona1); // salida: object
// Como ya pusimos antes, todo lo que no es un dato primitivo es un objeto. 
// Una clase es internamente un objeto.

// Valores por defecto

class DefaultPerson {

    constructor({nombre = "Sin nombre", edad = "sin definir", alias = "Sin alias" } = {}){
        this.nombre = nombre;
        this.edad = edad;
        this.alias = alias;
    }
}

let defaultPerson = new DefaultPerson ();
console.log(defaultPerson); // DefaultPerson {nombre: 'Sin nombre', edad: undefined, alias: undefined }
// Para poner solo el alias podemos hacerlo de la siguiente manera:
// Ponemos los valores por defecto en la clase y cuando instanciamos la clase:
let defaultPerson2 = new DefaultPerson ({ alias: "jabaloc"});
console.log(defaultPerson2);

// Acceso a propiedades

console.log(defaultPerson2.alias);
console.log(defaultPerson2["alias"]);

defaultPerson2.nombre = "Jorge";
console.log(defaultPerson2.nombre);

// funciones en clases

class Persona3 {

    constructor ({nombre = "sin nombre", edad = "sin edad", alias = "sin alias"} = {}){
        this.nombre = nombre;
        this.edad = edad;
        this.alias = alias;
    }
    caminar() {
        return `${this.nombre} está caminando`;
    }
}

let persona3 = new Persona3 ({nombre: "Jorge", edad: 37, alias: "jabaloc"});
console.log(persona3.caminar());

// Propiedades privadas
// para que no sea tn fácil acceder a propiedades, y no se puedan modificar.

class PrivatePerson {

    #bank // con esto indicamos que bank es privada

    constructor({nombre = "sin nombre", edad = "sin edad", alias = "sin alias", bank= "sin definir"} = {}){
        this.nombre = nombre;
        this.edad = edad;
        this.alias = alias;
        // Para definir una propiedad privada tenemos que poner delante #
        // Y hay que definirla en la clase
        this.#bank = bank;
    }
}

let personaPrivada = new PrivatePerson ({nombre: "Jorge", edad: 37, alias: "jabaloc", bank: "ES123456789"});
console.log(personaPrivada); // salida: PrivatePerson { nombre: 'Jorge', edad: 37, alias: 'jabaloc' } no se puede acceder a bank

// Si intentamos modificar la propiedad bank
personaPrivada.bank = "nuevo ES123456789";
console.log(personaPrivada); // salida: PrivatePerson { nombre: 'Jorge', edad: 37, alias: 'jabaloc', bank: 'nuevo ES123456789' }
// Esto en realidad lo que hace es crear una nueva propiedad llamada bank, pero no es la misma que #bank

// getters y setters

class GetSetPerson {

    #nombre
    #edad
    #alias
    #bank

    constructor ({nombre = "sin nombre", edad = "sin edad", alias = "sin alias", bank = "sin definir"} = {}){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#alias = alias;
        this.#bank = bank;
    }

    // Ahora para acceder al name creamos un get
    get nombre(){
        return this.#nombre;
    }

    // con set podemos modificar una propiedad privada desde fuera de la clase
    set bank(newBank){
        this.#bank = newBank;
    }
    get bank(){
        return this.#bank;
    }
}

let personaNueva = new GetSetPerson ({nombre: "Jorge", edad: 37, alias: "jabaloc", bank: "ES123456789"});

console.log(personaNueva); // salida: GetSetPerson {} todos los datos son privados.

// Pero podemos acceder a nombre a través del método get()
console.log(personaNueva.nombre); // salida: Jorge

personaNueva.bank = "ES987654321";
console.log(personaNueva.bank);


// Herencia

// sirve para heredar las propiedades y comportamientos de una clase

class Animal {

    constructor({nombre = "sin definir"} = {}){
        this.nombre = nombre;
    }
    sonido() {
        console.log(`${this.nombre} emite un sonido genérico`);
    }
}

class Perro extends Animal{

    correr(){
        (console.log(`${this.nombre} está corriendo`));
    }
    // Para sobreescribir un método de la clase padre hacemos lo siguiente:
    sonido(){
        console.log(`${this.nombre} está ladrando`);
    }
}

let miPerro = new Perro({nombre: "jabadog"});
console.log(miPerro);
miPerro.correr();
miPerro.sonido();

class Fish extends Animal {

    constructor({nombre = "nombre genérico", tamanio = "tamaño genérico"} = {}){
        // super() llama al constructor de la clase padre, y es obligado llamarle antes que this.
        super({nombre});
        this.tamanio = tamanio;
    }

    nada(){
        console.log(`El pez ${this.name} está nadando`);
    }
}

let miPez = new Fish({nombre: "jabafish", tamanio: 10});
console.log(miPez);
miPez.sonido();
miPez.nada();


console.log("")
// Métodos estáticos

// Es un método que pertenece a la clase y no a sus objetos (instancias)
// Sirven para poder llamar al método sin crear (instanciar) un objeto
class MathOperations {

    static sum(a, b){
        return a + b;
    }
}

console.log(MathOperations.sum(10, 15));



