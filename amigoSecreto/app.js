let nombres = [];

function agregarNombre() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre) {
        nombres.push(nombre);
        document.getElementById("listaAmigos").innerHTML = nombres.map(nombre => `<li>${nombre}</li>`).join("");
        document.getElementById("amigo").value = ""; 
    } else {
        alert("Por favor, ingrese un nombre.");
    }
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let nombreSorteado = nombres[indiceAleatorio];
    document.getElementById("resultado").textContent = `🎉 ${nombreSorteado} 🎉`;
    document.getElementById("listaAmigos").innerHTML = "";
    nombres = [];
}