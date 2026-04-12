let interfaz = document.getElementById('circulos');
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