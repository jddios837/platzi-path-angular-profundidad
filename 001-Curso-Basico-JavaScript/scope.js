// Scope Global
// En mi scope global no tengo acceso al scope local
var miNombre = "Juan";

function mostrarNombre(){
    var apellido = "Gomez";
    // Scope Local
    // En el scope local tengo acceso al Scope Local
    console.log(miNombre + " " + apellido);
}

mostrarNombre();
console.log(apellido); // Error
