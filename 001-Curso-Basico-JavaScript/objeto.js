let myCar = {
    marca: "Toyota", // properties
    modelo: "Corolla",
    annio: 2020,
    carDetail: function(){
        // this is reference to my main scope of the object
        console.log(`Car ${this.modelo} ${this.annio}`)
    }
};

console.log(myCar.carDetail())
