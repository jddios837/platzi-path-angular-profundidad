// Función Constructora
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
// con new se crea un nuevo objeto con nuestra función constructora
let autoNuevo = new auto("Tesla", "Model 3", 2020);

console.log(autoNuevo);
