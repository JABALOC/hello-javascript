// En este archivo es donde queremos usar la función add, así que hay que importarla
// importamos la función
import {add, resta, PI, nombre, miCirculo} from './28-exports-modules.js';
// importación por defecto. No hace falta poner llaves {}
import multiplicacion from './28-exports-modules.js';
// Aparte de esto, tenemos que crear un fichero llamado package.json, en que pondremos:

//{
//  "type": "module";  
//}

// Funciones
console.log(add(10, 30));
console.log(resta(10, 4));

// Propiedades
console.log(PI);
console.log(nombre);

// Importación por defecto
console.log(multiplicacion(3, 8));

// clases
console.log(miCirculo.area().toFixed(2));
console.log(miCirculo.perimetro().toFixed(2));

