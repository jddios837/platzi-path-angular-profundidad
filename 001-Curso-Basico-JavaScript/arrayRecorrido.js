let articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];
// Filter retorna un array nuevo, no modifica el original
let articulosMenoresQuinientos = articulos.filter(e => e.costo <= 500);

console.log(articulosMenoresQuinientos);

let nombreArticulos = articulos.map(e => e.nombre);

console.log(nombreArticulos);
