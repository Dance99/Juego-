//añadir numero secreto//
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

//Variable que controla si el numero es adivinado//
let adivina = false; 

//bucle del juego//
while (!adivinado) {
    //pide que ingrese su suposicion//
    let suposicion = parseInt(prompt("Adivina el numero entre el 1 al 100:"))

    //valida la susposicion del numero
    if (isNaN(suposicion)) {
        alert("Por favor, ingresa un numero valido.");
        continue; //vuelve al bucle del juego//
        
    }
}