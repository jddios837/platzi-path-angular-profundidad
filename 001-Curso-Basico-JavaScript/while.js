let estudiantes = ["Maria", "Sergio", "Manuel"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0) {
    let estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}
