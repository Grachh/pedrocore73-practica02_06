/* Objetos */
// Declaración de objetos 
// 1ª Forma Mediante un literal
// sintaxis
// {
//     propiedad: valor,
//     ...
// }

var jugador1 = {
    nombre: 'Cristiano Ronaldo',
    apellidos: 'Dos Santos Aveiro',
    dorsal: 7,
    goles: 0
}

// Notación del punto

console.log(jugador1.dorsal);  //gettear la propiedad

jugador1.dorsal = 9; //settear la propiedad

// 2ª Forma con new Object()
// sintaxis
// var variable = new Object();
// variable.propiedad = valor;

var jugador2 = new Object();
jugador2.nombre = 'Lionel';
jugador2.apellidos = 'Messi';
jugador2.dorsal = 8;
jugador2.goles = 0;

console.log(jugador2);

// 3ª Forma con una función constructora

function Jugador (nombre, apellidos, dorsal, goles) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dorsal = dorsal;
    this.goles = goles;
    // Métodos son funciones de objetos
    this.sumaGol = function () {
        this.goles++;
        alert('¡Gol de ' + this.nombre + ' ' + this.apellidos + '!');
    }
}

var jugador3 = new Jugador('Sergio','Ramos',4,0);
var jugador4 = new Jugador('Julio','Iglesias',1,0);

console.log(jugador3,jugador4);

// jugador3.sumaGol();  Ejecución de método
console.log(jugador3.goles);

// 4ª Forma mediante clases (ECMAScript 5)

class Vehiculo {
    marca;
    modelo;
    color;
    stock = 10;

    constructor(marca, modelo, color){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    ventaVehiculo() {
        this.stock--;
    }

    cambioColor(color) {
        this.color = color;
    }
}

let vehiculo1 = new Vehiculo('Renault','Megane','Blanco');
vehiculo1.ventaVehiculo();
vehiculo1.cambioColor('Rojo');

console.log(vehiculo1);


