let nombres = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
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
//esta función se encarga de actualizar la lista de nombres en el html
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    console.log(nombres); //Verifica si los nombres están en el array 
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}
//funcion para sortear de manera aleatoria un nombre de la lista
function sortearAmigo() {
    if (nombres.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        document.getElementById("resultado").textContent = "El amigo secreto es: " + nombres[indiceAleatorio];
    } else {
        alert("Agrega al menos un nombre antes de sortear.");
    }
}