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

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        document.getElementById("resultado").textContent = "El amigo secreto es: " + nombres[indiceAleatorio];
    } else {
        alert("Agrega al menos un nombre antes de sortear.");
    }
}