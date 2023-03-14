function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let carros = [];
for(let i = 0; i <= 30; i++){
    carros.push(new auto(`marca${i}`, `modelo${i}`, 1990 + i))
}

console.log(`Total of Cars ${carros.length}`)
console.log(carros);
