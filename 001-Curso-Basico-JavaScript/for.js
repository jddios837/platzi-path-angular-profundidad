// for - recorre un bloque de código varias veces
// for/in - recorre las propiedades de un objeto
// for/of - recorre los valores de un objeto iterable

let estudiantes = ["Maria", "Sergio", "Manuel"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

// for(let i = 0; i < estudiantes.length; i++){
//     saludarEstudiante(estudiantes[i]);
// }

for(let estudiante of estudiantes){
    saludarEstudiante(estudiante);
}
