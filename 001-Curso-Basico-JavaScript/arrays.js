let frutas = [
    "Manzana", "Plátano", "Cereza", "Freza"
];

// agregar valores a lo ultimo
let masFrutas = frutas.push("Uvas");  // Muta
// eliminar el ultimo elemento
let ultimo = frutas.pop();  // Muta
// agregar valores al principio
let alPrincipio = frutas.unshift("Uvas")  // Muta
// eliminar elementos al inicio
let borrarAlPrincipio = frutas.shift(); // Muta
// saber el index usando el nombre
let posicion = frutas.indexOf("Cereza");

console.log(frutas);
console.log(posicion);
