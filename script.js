//añadir numero secreto//
const numeroSecreto = Math.floor(Math.random() * 20) + 1;

//Variable que controla si el numero es adivinado//
let adivina = false; 

//bucle del juego//
while (!adivina) {
    //pide que ingrese su suposicion//
    let suposicion = parseInt(prompt("Adivina el numero entre el 1 al 20:"))

    //valida la susposicion del numero
    if (isNaN(suposicion)) {
        alert("Por favor, ingresa un numero valido.");
        continue; //vuelve al bucle del juego//
    }
}

//compara la suposicion//
if (suposicion < numeroSecreto) {
    alert("Tu suposiciones menor que el número secreto. Intenta nuevamente.");
} else if(suposicion > numeroSecreto) {
    alert("Tu suposicion es mayor que el número secreto. Intenta nuevamente.");
} else {
    alert("¡Felicidades!! Has adivinado el número secreto:" + numeroSecreto);
    adivinado = true; //salir de bucle
}
