/* Funciones */

// sintaxis de declaracion
// function nombre (parametros) {
    // código a ejecutar
    // return variable
//}

// - El nombre es opcional (funciones anónimas).
// - Parámetros son opcionales.
// - return es opcional (porque funciones que no devuelvan valor).

function suma(a, b) {
    console.log(a + b); // no devuelve valor
}

function multiplicacion(a,b) {
    let c = a * b;
    return c; // devuelve valor
    // debajo de return ya no se ejecuta
}

// sintaxis de ejecucion
// nombre(argumentos)   *Argumentos son los valores de los parámetros

suma(4,5);

resultado = multiplicacion(5,6);
console.log(resultado);

/* Ámbito de las variables y constantes */

// Ámbito para las variables declaradas con var
// el ámbito para var es el de la función más próxima

function mayorEdad(edad) {
    if (edad >= 18) {
        var adulto = true;
    } else {
        var adulto = false;
    }
    console.log(adulto);
}

mayorEdad(20);
//console.log(adulto); // provoca error porque está fuera del ámbito

// Ámbito para las variables declaradas con let
// el ámbito para let es el del bloque de código más próximo (estructuras o funciones)

function setPuntuacion (puntuacion) {
    if (puntuacion >= 5) {
        let apto = true;
        console.log(apto);
    } else {
        let apto = false;
        console.log(apto)
    }
    //console.log(apto); // error porque aunque está en la función esta fuera del bloque
}

setPuntuacion(4);
//console.log(apto); // error por el mismo motivo de antes

// Ámbito global tanto para let como para var (archivo);

let superficie; // tanto con let como con var

function rectangulo (a, b) {
    superficie = a * b;
}

rectangulo(4,5);
console.log(superficie);

/* Conclusión final: utilizar siempre let */

// Nota (mala práctica)
// Es posible declarar una variable sin let ni var
// Siempre tendrá el ámbito global

function triangulo(a,b) {
    area = 0.5 * a * b; // mala practica
}

triangulo(3,10);
console.log(area);


