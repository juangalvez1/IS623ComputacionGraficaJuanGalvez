let canvas = document.getElementById('graph');
let grafica = canvas.getContext('2d');

grafica.translate(0, 400);
grafica.scale(1, -1);

grafica.beginPath();
grafica.moveTo(0, 0);

function drawLine(x, y){
    grafica.lineTo(x, y);
    grafica.strokeStyle = "red";
    grafica.stroke();

    grafica.moveTo(x, y);
}

let drawButton = document.getElementById('graficar');

drawButton.addEventListener('click', () => {
    let x = parseFloat(document.getElementById('xCoord').value);
    let y = parseFloat(document.getElementById('yCoord').value);

    if (x < 0 || x > 500) {
        alert('X fuera de rango. Debe estar entre 0 y 500.');
        return;
    }

    if (y < 0 || y > 400) {
        alert('Y fuera de rango. Debe estar entre 0 y 400.');
        return;
    }

    drawLine(x, y);
});

const clearButton = document.getElementById('limpiar');

clearButton.addEventListener('click', () => {
    grafica.setTransform(1, 0, 0, 1, 0, 0);

    grafica.clearRect(0, 0, canvas.width, canvas.height);

    grafica.translate(0, 400);
    grafica.scale(1, -1);

    grafica.beginPath();
    grafica.moveTo(0, 0);
});