let figurita1 = document.getElementById('figurita1');
let isometrico1 = figurita1.getContext('2d');

let figurita2 = document.getElementById('figurita2');
let isometrico2 = figurita2.getContext('2d');

let figurita3 = document.getElementById('figurita3');
let isometrico3 = figurita3.getContext('2d');

let figurita4 = document.getElementById('figurita4');
let isometrico4 = figurita4.getContext('2d');


function dibujarFiguraRellena(lienzo, puntos, colorRelleno) {
    lienzo.beginPath();
    lienzo.moveTo(puntos[0][0], puntos[0][1]);

    for (let i = 1; i < puntos.length; i++) {
        lienzo.lineTo(puntos[i][0], puntos[i][1]);
    }

    lienzo.closePath();

    // Relleno
    lienzo.fillStyle = colorRelleno;
    lienzo.fill();

    // Bordes
    lienzo.strokeStyle = "black";
    lienzo.stroke();
}


// Figurita 1

// Cara superior
dibujarFiguraRellena(isometrico1, [
    [0, 90],
    [100, 150],
    [250, 60],
    [150, 0]
], "#C84AFA");

// Cara izquierda
dibujarFiguraRellena(isometrico1, [
    [0, 270],
    [0, 90],
    [100, 150],
    [100, 210],
    [200, 390]
], "#C84AFA");

// Cara frontal derecha superior
dibujarFiguraRellena(isometrico1, [
    [100, 150],
    [100, 210],
    [250, 120],
    [250, 60],
], "#C84AFA")

// Cara derecha
dibujarFiguraRellena(isometrico1, [
    [100, 210],
    [250, 120],
    [350, 300],
    [200, 390]
], "#C84AFA");

// Cara frontal izquierda inferior
dibujarFiguraRellena(isometrico1, [
    [200, 450],
    [200, 390],
    [0, 270],
    [0, 330]
], "#C84AFA");

// Cara frontal derecha inferior
dibujarFiguraRellena(isometrico1, [
    [200, 450],
    [350, 360],
    [350, 300],
    [200, 390]
], "#C84AFA");

// Figurita 2
