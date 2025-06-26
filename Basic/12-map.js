// map (o biblioteca en otros lenguajes)

// es un conjunto de elementos que van en pareja
// clave-valor

// declaración

let myMap = new Map();
console.log(myMap);


// inicializar

myMap = new Map([
    ["name", "Jorge"],
    ["apellido", "Abalo"],
    ["edad", 37]
]);
console.log(myMap);
// Map(3) { 'name' => 'Jorge', 'apellido' => 'Abalo', 'edad' => 37 }

// métodos y propiedades

// set(clave, valor)
// Añade elementos a map()

myMap.set("mail", "micorreo@hotmail.com");
console.log(myMap);

// get(clave)

console.log(myMap.get("name")); // salida: Jorge
// Si metemos una clave que no existe nos 
// devolverá undefined
console.log(myMap.get("Nombre")); // salida: Undefined

// Saber si una clave existe
console.log(myMap.has("edad")); // true

//Borrar una dato

myMap.delete("apellido");
console.log(myMap);

//Comprobar el tamaño
console.log(myMap.size); // salida: 3

// recorrer un Map

for (let [clave, valor] of myMap){
    console.log(clave, ":", valor);
}
/* Salida:
name : Jorge
edad : 37
mail : micorreo@hotmail.com
*/

//Eliminar todo
myMap.clear();
console.log(myMap.size); //0



