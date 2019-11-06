/* Comentarios
en bloque */

// Comentarios en línea

// Características básicas de la sintaxis (en general)

// - No tiene en cuenta espacios en blanco y saltos de línea

// - Distingue mayúsculas de minúsculas

// - Las sentencias o instrucciones finalizan (opcional) con punto y coma 
//      (sistema denominado ASI)

/* Variables y constantes */

var alumno; // identificadores deben comenzar por letra, guión bajo o $ y no usar palabras reservadas

let cursoTarde; // (let desde ECMAScript 5) Buena práctica usar camel case en palabras compuestas

const pi = 3.1416; // (const desde ECMAScript 5) Se declara e inicializa

// Declaración de varias variables a la vez

var centro, ciudad, cp;

// Asignación de valores

alumno = 'Pepe';

// a una constante no se le puede reasignar valor

// pi = 6.2832; error

/* Tipos de datos */

// String   sintaxis: comillas dobles o simples o francesas

alumno = `Juan`;

// Números sintaxis: sin simbolos y el punto para flotantes y (e) para exponencial

var resultado = 9.84541

// Booleans sintaxis: palabras reservadas true o false

var aprobado = true;

// Null sintaxis: palabra reservada null

var frutas = null;

// Undefined sintaxis: palabra reservada undefined o declaración sin inicialización

var equipo;
console.log(equipo);

// Arrays y Objetos ver más adelante

// obtener el tipo de dato de una variable en un determinado momento

console.log(typeof aprobado);

/* Operadores */

// Operadores aritméticos

// Suma +
// Resta -
// Multiplicación *
// División /
// Módulo %
// Incremento ++ (de uno en uno)
// Decremento --        idem

var resultado2 = (2 + 4) * 10; // devuelve 60

var a = 10;
var b = 'Juan';
console.log(a*b); // devuelve NaN 'not a number'

// Suma si no es aritmética se convierte en concatenación 'type coercion'

var c = 'Hola';
var d = ' Mundo!';

console.log(c+d);  // concatenación

var e = 'El resultado es ';
var f = 8.7;
console.log(e+f) // concatenación con coerción de tipos

// Operadores de comparación

// Comparación de igualdad simple sintaxis: ==

var g = 12;
var h = '12';

console.log(g == h); // true

// Comparación de igualdad exacta sintaxis: ===

console.log(g === h); // false

// Idem anteriores son los de desigualdad != | !==

console.log(g !== h); // true

// Mayor o igual >= | Mayor > | Menor o igual <= | Menor <

var i = 10;
var j = 12;

console.log(i >= j); // false

// Operadores lógicos
// Y lógico sintasis: &&
// O Lógico sintasis: ||

var k = 12;
var l = 14;
var m = 12;

console.log(l > k && l > m); // true
console.log(l < k || l > m); // true

// Negación sintaxis !

var soyMayor = false;
console.log(!soyMayor); // true

// Operadores condicionales (ternario)
// sintaxis  (condicion) ? expresion : expresion

var password = 'pepe1234';

password === 'juan1234' ? console.log('Bienvenido') : console.log('Contraseña errónea');

/* Estructuras */
// Estructura condicional if
// sintaxis
// if (condicion) {
    // código a ejecutar si se cumple la condicion
// }

var n = 10;
var o = 12;

if (n < o) {
    console.log('n es menor que o'); // se ejecutará
}

// Estructura condicional if else
// sintaxis
// if (condicion) {
    // código a ejecutar si se cumple la condicion
// } else {
    // código a ejecutar si no se cumple la condición
// }

o = 10;

if (n < o) {
    console.log('n es menor que o');
} else {
    console.log('n es mayor ó igual que o');
}

// Estructura condicional if else if
// sintaxis
// if (condicion) {
    // código a ejecutar si se cumple la condicion
// } else if (condicion) {
    // código a ejecutar si se cumple la condición
// } else {
    // código a ejecutar si no se cumplen ninguna de las condiciones anteriores
// } 

if (n < o) {
    console.log('n es menor que o');
} else if (n === o) {
    console.log('n es igual a o');
} else {
    console.log('n es mayor que o');
}

// Estructura condicional switch case
// sintaxis
// switch (expresion) {
    //case caso1:
        //código a ejecutar para ese caso
        //break
    //case caso2:
        //código a ejecutar para ese caso
        //break
    //...
    //default:
        //código a ejecutar si no se cumple ningún caso
//}

var diaSemana = 2;

switch (diaSemana) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Día erróneo');
}

// Estructuras ciclo o iterativas (bucles)

// Ciclo For
// sintaxis
// for (valor inicial; condición; actualización) {
    // código a ejecutar para cada iteración del ciclo
//}

for (i=0; i < 10; i++) {
    console.log('En cada iteración i tiene el valor '+ i);
}

// Ciclo while
// sintaxis
// while (condicion) {
    // código a ejecutar mientras se cumpla esa condición
//}

while (password !== '4321') {
    password = prompt('Escriba su contraseña');
}









