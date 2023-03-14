let articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

// devuelve los objetos que coinciden con la validación que se indica
let encuentraArticulo = articulos.find(e => e.nombre === "Laptop");
console.log(encuentraArticulo);

// recorrer el array
articulos.forEach(articulo => {
    console.log(articulo.nombre);
});

// verifica si una condición se cumple
let articulosBaratos = articulos.some(articulo => articulo.costo < 700);
console.log(articulosBaratos);
