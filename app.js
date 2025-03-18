let nombres = [];

function agregarNombre() {
    let nombre = prompt("Ingresa el nombre de un amigo:").trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (!nombres.includes(nombre)) {
        nombres.push(nombre);
        actualizarLista();
    } else {
        alert("Este nombre ya ha sido agregado.");
    }
}
