//añadir numero secreto//
let numeroSecreto = 28;

//Variable que controla si el numero es adivinado//
let adivina = parseInt(prompt("ingresa un numero de (1 al 50)"));


//compara la suposicion//
if (adivina === numeroSecreto) {
     alert("¡Felicidades!! Has adivinado el número secreto:" + numeroSecreto);
} else if(adivina > numeroSecreto) {
    alert("Tu suposicion es mayor que el número secreto. Intenta nuevamente.");
} else {
    alert("Tu suposiciones menor que el número secreto. Intenta nuevamente.");
    adivinado = true; //salir de bucle
}
