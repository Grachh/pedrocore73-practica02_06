/* Arrays */
// sintaxis
// let variable = [element1, element2, ...];
// let variable = new Array(element1, element3, ...); * Poco utilizada
// Tienen un índice de los elementos que comienza a cero
// Acceso a los elementos variable[indice]

let frutas = ['pera','manzana','plátano']; // pueden ser tipos diferentes

console.log(frutas[1]); // devolverá manzana

/* Propiedades y métodos sobre Arrays */
// Length nº de elementos del array

console.log(frutas.length); // 3
console.log(frutas[frutas.length - 1]); // plátano

for (i=0; i < frutas.length; i++) {
    console.log('Tengo ' + frutas[i]);
}

// pop() elimina el último elemento del array

frutas.pop();

console.log(frutas);

// shift() elimina el primer elemento del array

frutas.shift();

console.log(frutas);

// push() añade un elemento al final del array

frutas.push('melón');

console.log(frutas);

entrada = ['kiwi','fresa','sandía'];

for (i=0; i < entrada.length; i++) {
    frutas.push(entrada[i]);
}

console.log(frutas);

// slice(parametros) extraer los elementos indexados
// no mofidica el array
// primer parametro desde donde se extrae incluido
// segundo parametro hasta donde se extrae excluido

// ["manzana", "melón", "kiwi", "fresa", "sandía"]

frutasSeleccionadas = frutas.slice(1,3);
console.log(frutasSeleccionadas);

//splice(parametros) elimina los elementos indexados
// primer parametro desde donde se elimina incluido
// segundo parametro hasta donde se elimina incluido

// ["manzana", "melón", "kiwi", "fresa", "sandía"]

frutas.splice(1,3);
console.log(frutas);

// Para sustituir un elemento
// ["manzana", "sandía"]

frutas.splice(1,1,'plátano');
console.log(frutas);

// ["manzana", "plátano"] Para sustituciones por varios elementos no se puede usar splice
suministro = ['ciruela','pomelo'];

frutas.pop();
for (i=0; i < suministro.length; i++) {
    frutas.push(suministro[i]);
}
console.log(frutas);

// Se puede añadir un elemento sin eliminar ninguno de los existentes
//  ["manzana", "ciruela", "pomelo"]

frutas.splice(1,0,'castaña');
console.log(frutas);

// reverse() cambiar el orden de los elementos

frutas.reverse();
console.log(frutas);

// sort(funcion) ordena *según la función en tipos number
// ascendente

frutas.sort();
console.log(frutas);

// descente

frutas.sort().reverse();
console.log(frutas);

// Para números se le pasa funcion

puntuaciones = [34, 56, 12, 99, 10];

// ascendente
puntuaciones.sort(function(a,b){return a - b}); // ejemplo de funcion anónima (declara y ejecuta)
console.log(puntuaciones);

// descendente
puntuaciones.sort(function(a,b){return b - a});
console.log(puntuaciones);

// includes(valor) comprobar si existe un valor como elemento del array

// ["pomelo", "manzana", "ciruela", "castaña"]

console.log(frutas.includes('pomelo')); // true
console.log(frutas.includes('sandía')); // false

// Ciclo para arrays for each *ECMAScript 5
// sintaxis array.forEach(function (elementoarray) {
    // código con cada elementoarray
//})

frutas.forEach(function (fruta){
    console.log(fruta);
})

// ECMAScript 5 funciones flecha
// No utiliza la palabra reservada function
// utiliza el simbolo de flecha =>
// (*) permite de manera opcional eliminar los paréntesis si solo hay un parámetro 
// (**) permite de manera opcional eliminar las llaves si solo hay una línea de código

frutas.forEach((fruta)=>{
    console.log(fruta);
})

frutas.forEach(fruta => console.log(fruta)); // Sólo si se cumple * y **


