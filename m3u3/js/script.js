//Ejercicio 1--------------

let ejer1 = document.getElementById("ejer1")

function ejercicio1() {
    const distancia = parseInt(prompt('Ingrese una distancia:', ''));

    if (distancia <= 0) {
        ejer1.innerHTML = (`La distancia no puede ser un numero negativo o 0`);
    } else if (distancia > 0 && distancia <= 1000) {
        ejer1.innerHTML = (`Se debe trasladar a pie`);
    } else if (distancia > 1000 && distancia <= 10000) {
        ejer1.innerHTML = (`Se debe trasladar en bicicleta`);
    } else if (distancia > 10000 && distancia <= 30000) {
        ejer1.innerHTML = (`Se debe trasladar en colectivo`);
    } else if (distancia > 30000 && distancia <= 100000) {
        ejer1.innerHTML = (`Se debe trasladar en auto`);
    } else {
        ejer1.innerHTML = (`Se debe trasladar en avion`);
    }
}

//Ejercicio 2--------------

let posicion = 0;
let pibote = 0;
const cuantos = 4;
let maxValue = 0;
let array = [];

let ejer2 = document.getElementById("ejer2")

function ejercicio2() {
    posicion = pibote++;
    while (posicion <= cuantos) {
        const valor = parseInt(prompt(`Ingrese un numero:`, ''));
        array[posicion] = valor;
        posicion++;
    }

    posicion = 0;
    pibote = 0;
    posicion = pibote++;
    while (posicion <= cuantos) {
        if (array[pibote] < array[posicion]) {
            maxValue = array[posicion];
            pibote = posicion;
        }
        posicion++;
    }


    ejer2.innerHTML = (`el numero mas grande es: ${maxValue}<br/>`);
}


