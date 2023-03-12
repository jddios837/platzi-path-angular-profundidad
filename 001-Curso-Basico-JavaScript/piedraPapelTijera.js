const PIEDRA = "Piedra";
const PAPEL = "Papel";
const TIJERA = "Tijera";

const play = function(user, cpu) {
    const CPU_WIN = "CPU Win!";
    const USER_WIN = "User Win!"
    if (user === cpu) console.log("Empate")

    if (user === PIEDRA && cpu === PAPEL) {
        console.log(CPU_WIN);
    } else if (user === PIEDRA && cpu === TIJERA) {
        console.log(USER_WIN);
    } else if (user === PAPEL && cpu === PIEDRA) {
        console.log(USER_WIN);
    } else if (user === PAPEL && cpu === TIJERA) {
        console.log(CPU_WIN);
    } else if (user === TIJERA && cpu === PIEDRA ) {
        console.log(CPU_WIN);
    } else if (user === TIJERA && cpu === PAPEL) {
        console.log(USER_WIN);
    }
}

console.log(play("Papel", "Piedra")) // User Win
console.log(play("Tijera", "Tijera")) // Empate
