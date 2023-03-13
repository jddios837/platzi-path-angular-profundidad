let estudiantes = ["Juan", "Juanita", "Daniela"]

function solution(estudiantes, deathCount, nuevo) {
    if (deathCount > 0) {
        for (let i = 0; i < deathCount; i++){
            estudiantes.pop();
        }
    }
    estudiantes.push(nuevo);

    return estudiantes;
}

console.log(solution(estudiantes, 1, "Julian"));
