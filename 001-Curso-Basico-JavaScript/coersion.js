// la conversion de un tipo al otro
// recordar que JS es debilmente tipado

// Coersion implicita
var a = 4 + "7"; // 47 (concatena)
var b = 4 * "7"; // 28 (multiplicar si genera la conversion implicita)

// Coersion explicita
var a = 20;
var b = a + "" // 20 como string
// se logra convirtiendo un numero a string
var c = String(a); // tipo string
var d = Number(c); // tipo number

