const ejercicio2 = () => {
    const prompt = require('prompt-sync')();

    let num = parseInt(prompt("Ingrese un número: "));

    if (isNaN(num) || num <= 0) {
        console.log("Ingrese un número válido mayor que 0");
        return;
    }

    if(num % 2 === 0){
        console.log("Cuadrados de 1 a " + num);
        for (let i = 1; i <= num; i++) {
            console.log(i**2);
        }
    } else {
        console.log("Cubos de 1 a " + num);
        for (let i = 1; i <= num; i++) {
            console.log(i**3);
        }
    }
}

module.exports = ejercicio2;