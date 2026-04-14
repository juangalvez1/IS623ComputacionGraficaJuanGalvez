function Punto1(){
    let interfaz = document.getElementById('punto1');
    let lienzo = interfaz.getContext('2d');

    let w = interfaz.width;
    let h = interfaz.height;

    function DibujarCirculo(x, y, radius, color){
        lienzo.beginPath();
        lienzo.arc(x, y, radius, 0, Math.PI*2);

        lienzo.lineWidth = 1;
        lienzo.strokeStyle = color;
        lienzo.stroke();

        lienzo.closePath();
    }

    let radius = Math.min(w, h) / 3.1;


    console.log("hola")
    console.log(w)
    console.log(h)

    DibujarCirculo(w / 2, h - radius, radius, '#b8436b');
    DibujarCirculo(radius, radius, radius, '#418143');
    DibujarCirculo(w - radius, radius, radius, '#5e36b2');
}

function Punto2(){
    let interfaz = document.getElementById('punto2');
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
}

function Punto3(){
    let interfazTrianglulo = document.getElementById('trianguloPunto3');
    let interfazRectangulo = document.getElementById('rectanguloPunto3');
    let interfazTrapecio = document.getElementById('trapecioPunto3');
    let interfazHexagono = document.getElementById('hexagonoPunto3');

    let trianglulo = interfazTrianglulo.getContext('2d')
    let tectangulo = interfazRectangulo.getContext('2d')
    let trapecio = interfazTrapecio.getContext('2d')
    let hexagono = interfazHexagono.getContext('2d')

    function DrawLine(x1, y1, x2, y2, color, lienzo){
        lienzo.beginPath();
        lienzo.lineWidth = 1;
        lienzo.strokeStyle = color;

        lienzo.moveTo(Math.floor(x1), Math.floor(y1))
        lienzo.lineTo(Math.floor(x2), Math.floor(y2))

        lienzo.stroke();
        lienzo.closePath();
    }

    // Triangulo
    let wT = interfazTrianglulo.width;
    let hT = interfazTrianglulo.height;

    DrawLine(wT / 2, 10, 10, hT - 10, "black", trianglulo);
    DrawLine(10, hT - 10, wT - 10, hT - 10, "black", trianglulo);
    DrawLine(wT - 10, hT - 10, wT / 2, 10, "black", trianglulo);

    // Rectangulo
    let wR = interfazRectangulo.width;
    let hR = interfazRectangulo.height;

    DrawLine(10, 10, wR - 10, 10, "blue", tectangulo);
    DrawLine(wR - 10, 10, wR - 10, hR - 10, "blue", tectangulo);
    DrawLine(wR - 10, hR - 10, 10, hR - 10, "blue", tectangulo);
    DrawLine(10, hR - 10, 10, 10, "blue", tectangulo);

    // Trapecio
    let wTr = interfazTrapecio.width;
    let hTr = interfazTrapecio.height;

    DrawLine(wTr * 0.3, 10, wTr * 0.7, 10, "green", trapecio); // base superior
    DrawLine(wTr * 0.7, 10, wTr - 10, hTr - 10, "green", trapecio);
    DrawLine(wTr - 10, hTr - 10, 10, hTr - 10, "green", trapecio); // base inferior
    DrawLine(10, hTr - 10, wTr * 0.3, 10, "green", trapecio);

    // Hexagono
    let w = interfazHexagono.width;
    let h = interfazHexagono.height;

    let cx = w / 2;
    let cy = h / 2;
    let r = 110;

    DrawLine(cx + r, cy, cx + r/2, cy + (Math.sqrt(3)/2)*r, "red", hexagono);
    DrawLine(cx + r/2, cy + (Math.sqrt(3)/2)*r, cx - r/2, cy + (Math.sqrt(3)/2)*r, "red", hexagono);
    DrawLine(cx - r/2, cy + (Math.sqrt(3)/2)*r, cx - r, cy, "red", hexagono);
    DrawLine(cx - r, cy, cx - r/2, cy - (Math.sqrt(3)/2)*r, "red", hexagono);
    DrawLine(cx - r/2, cy - (Math.sqrt(3)/2)*r, cx + r/2, cy - (Math.sqrt(3)/2)*r, "red", hexagono);
    DrawLine(cx + r/2, cy - (Math.sqrt(3)/2)*r, cx + r, cy, "red", hexagono);
}

function Punto4(){
    let interfaz = document.getElementById('punto4');
    let lienzo = interfaz.getContext('2d');

    let w = interfaz.width;   // 600
    let h = interfaz.height;  // 300

    // 🔲 IZQUIERDA — BÁSICO
    lienzo.fillStyle = "lightblue";
    lienzo.fillRect(20, 20, 120, 60);

    lienzo.strokeStyle = "black";
    lienzo.strokeRect(160, 20, 120, 60);

    lienzo.clearRect(50, 30, 40, 30);

    lienzo.beginPath();
    lienzo.arc(100, 150, 40, 0, Math.PI * 2);
    lienzo.fillStyle = "yellow";
    lienzo.fill();
    lienzo.stroke();
    lienzo.closePath();

    // 🔹 DERECHA — AVANZADO
    lienzo.beginPath();
    lienzo.arc(450, 80, 40, 0, Math.PI);
    lienzo.strokeStyle = "orange";
    lienzo.stroke();
    lienzo.closePath();

    lienzo.font = "18px Arial";
    lienzo.fillStyle = "black";
    lienzo.fillText("Canvas", 350, 160);

    lienzo.strokeStyle = "red";
    lienzo.strokeText("API", 450, 160);

    lienzo.beginPath();
    lienzo.moveTo(320, 220);
    lienzo.quadraticCurveTo(380, 170, 440, 220);
    lienzo.strokeStyle = "green";
    lienzo.stroke();
    lienzo.closePath();

    lienzo.beginPath();
    lienzo.moveTo(460, 220);
    lienzo.bezierCurveTo(500, 170, 550, 260, 580, 220);
    lienzo.strokeStyle = "purple";
    lienzo.stroke();
    lienzo.closePath();
}


Punto1();
Punto2();
Punto3();
Punto4();