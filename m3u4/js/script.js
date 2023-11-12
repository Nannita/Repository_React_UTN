//Ejercicio 1--------------

function celeste() {
    let celeste = document.getElementById("body").style.background = "#87cefa";
    let txtnegro = document.getElementById("body").style.color = "#000000";
}

function negro() {
    let negro = document.getElementById("body").style.background = "#000000";
    let txtnegro = document.getElementById("body").style.color = "#ffffff";
}

function beige() {
    let beige = document.getElementById("body").style.background = "#d8d8b3";
    let txtnegro = document.getElementById("body").style.color = "#000000";
}

function reset() {
    let reset = document.getElementById("body").style.background = "#ffffff";
    let txtnegro = document.getElementById("body").style.color = "#000000";
}
//Ejercicio 2--------------

function contarCaracteres(obj) {
    let strlargo = obj.value.length;
    document.getElementById("cantidad").innerHTML = strlargo
}

//Ejercicio 3--------------
var alumnos = [{
    nombre: 'Juan Gomez', nota: 7
}, {
    nombre: ' Pedro Rodriguez', nota: 4
}, {
    nombre: ' Roxana García', nota: 8
}, {
    nombre: ' Luciano Lopez', nota: 5
}, {
    nombre: ' Fernanda Gimenez', nota: 6
}, {
    nombre: ' Florencia Martinez', nota: 10
}, {
    nombre: ' Raul Sanchez', nota: 7
}, {
    nombre: ' Sandra Figueroa', nota: 8
}
];
var notaApro = 0;
var nota = 0;

function ejercicio3() {
    let aprobados = [];
    while (nota < alumnos.length) {
        if (alumnos[nota].nota >= 7) {
            aprobados[notaApro] = alumnos[nota].nombre;
            notaApro++;
        }
        nota++;
    }
    ejer3.innerHTML = (`Los alumnos aprobados son: ${aprobados}.<br/>`);
}





