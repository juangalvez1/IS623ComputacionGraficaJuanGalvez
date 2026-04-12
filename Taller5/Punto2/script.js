let interfaz = document.getElementById('circulos');
let cuadro = interfaz.getContext('2d');
cuadro.translate(0.5, 0.5);

let width = Math.floor(interfaz.width) - 1;
let height = Math.floor(interfaz.height) - 1;

function DrawLine(x1, y1, x2, y2, color, lienzo){
    lienzo.beginPath();
    lienzo.lineWidth = 1;
    lienzo.strokeStyle = color;

    lienzo.moveTo(Math.floor(x1), Math.floor(y1))
    lienzo.lineTo(Math.floor(x2), Math.floor(y2))

    lienzo.stroke();
    lienzo.closePath();
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

DrawLine(0, height, width, height, "red", cuadro)

DrawLine(0, height * 1/4, 0, height * 3/4, randomColor(), cuadro)
DrawLine(width / 2, height / 2, width / 2, height, randomColor(), cuadro)
DrawLine(width, height * 1/4, width, height * 3/4, randomColor(), cuadro)

DrawLine(0, height * 3/4, width / 2, height, randomColor(), cuadro)
DrawLine(width / 2, height, width, height * 3/4, randomColor(), cuadro)

DrawLine(0, height * 1/4, width / 2, height / 2, randomColor(), cuadro)
DrawLine(width / 2, height / 2, width, height * 1/4, randomColor(), cuadro)

DrawLine(0, height * 1/4, width / 2, 0, randomColor(), cuadro)
DrawLine(width / 2, 0, width, height * 1/4, randomColor(), cuadro)

DrawLine(75, height * 1/4, width / 2, 75 *1/4, randomColor(), cuadro)
DrawLine(width / 2, 75 * 1/4, width - 75, height * 1/4, randomColor(), cuadro)
DrawLine(width - 75, height * 1/4, width / 2, height / 2 - 75 * 1/4, randomColor(), cuadro)
DrawLine(width / 2, height / 2 - 75 * 1/4, 75, height * 1/4, randomColor(), cuadro)

DrawLine(width / 2, 75 * 1/4, width / 2, height / 2 - 75 * 1/4, randomColor(), cuadro)