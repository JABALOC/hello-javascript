// Exportación de módulos (Un módulo es un fichero)

// Un módulo es una forma de dividir nuestro código en partes
// Si intentamos ejecutar una función de otro fichero tenemos que exportar e importar modulos

// funciones

// Función que queremos usar desde otro archivo
function add(a, b) {
    return a + b;
}
//La exportamos
export {add}; // Esto es útil si tienes varias funciones que exportar

export function resta(a, b) {
    return a - b;
}

// Propiedades

export const PI = 3.1415;
export let nombre = "Jorge";

// Exportación por defecto

// Una exportación por defecto, permite exportar una sola cosa de un módulo. puede ser:
// Una función
// Una clase
// Un valor
// no necesita llaves {} para importarla.

export default function multiplicacion(a, b) {
    return a * b;
}

// Clases 

export class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    perimetro() {
        return 2 * Math.PI * this.radius;
    }
}

export let miCirculo = new Circle (35);
console.log(miCirculo.area());

