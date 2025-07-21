/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

export function funcionExportada() {
    return "Esta es una función exportada";
}

// 2. Exporta una constante

export const constanteExportada = "Esta es mi constante exportada";

// 3. Exporta una clase

export class ClaseExportada {

    constructor(nombre){
        this.nombre = nombre;
    }
    recibeNombre(){
        return `Hola ${this.nombre}, has importado y exportado una clase correctamente`;
    }
}

// 4. Importa una función

// Resuelto en el fichero 32-modules-exercises

// 5. Importa una constante

// Resuelto en el fichero 32-modules-exercises

// 6. Importa una clase

// Resuelto en el fichero 32-modules-exercises

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

export default function(a, b){
    return a + b;
}

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// Resuelto en el fichero 32-modules-exercises

// 9. Exporta una función, una constante y una clase desde una carpeta

// Resuelto desde otra carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

// Resuelto en el fichero 32-modules-exercises