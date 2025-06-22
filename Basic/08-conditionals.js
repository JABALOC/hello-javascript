// if, else if, else

//if (si)

let age = 37;

if (age == 37){
    console.log(`La edad es 37`);
}

//else (si no)

if (age == 37){
    console.log(`Tengo 37 años`);
}else {
    console.log(`La edad no es 37`);
}

//else if (si no, si)

if (age == 37){
    console.log(`Es correcto, la edad es 37`);
} else if(age >= 34 && age <= 36){
    console.log(`Estas cerca, pero esa no es mi edad`);
} else if(age > 37){
    console.log(`Te has pasado`);
} else{
    console.log(`Ni te acercas`);
}

// Operador ternario

const mensaje = age == 37 ? "La edad es 37" : "La edad no es 37";
console.log(mensaje);

//switch

//switch es la alternativa a anidar muchos else if

let day = 0;
let dayName;

switch (day){
    case 0:
        dayName = "Lunes";
        break;
    case 1:
        dayName = "Martes";
        break;
    case 2:
        dayName = "Miércoles";
        break;
    case 3:
        dayName = "Jueves";
        break;
    case 4:
        dayName = "Viernes";
        break;
    case 5:
        dayName = "Sábado";
        break;
    case 6:
        dayName = "Domingo";
        break;
    default:
        dayName="Número de día incorrecto";
}
console.log(dayName);
