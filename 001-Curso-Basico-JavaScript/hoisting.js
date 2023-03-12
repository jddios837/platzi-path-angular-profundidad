// Ocurre de ES5 hacia abajo
// A partir de ES6 se crearon let y const
console.log(miNombre);
var miNombre = "Juan";

// lo que va a ocurrir es que JS
// declara primero la variable como undefined
var miNombre = undefined;
console.log(miNombre);
miNombre = "Juan";

// ocurre el hoisting tambien con funciones
myFun(); // Las funciones se mueven hacia el inicio "automaticamente"
// pero es buena practica declarar variable y funciones al principio
// antes de usarlos

function myFun() {
    console.log("Hola " + miNombre);
}
