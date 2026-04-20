const ejercicio3 = () => {
    const prompt = require('prompt-sync')();

    let num = parseInt(prompt("Ingrese un número: "));

    let temp = num;
    let digitos = 0;
    while(temp != 0){
        temp = parseInt(temp / 10)
        digitos++
    }

    // console.log(digitos)

    let newNum = 0
    for (let i = digitos - 1, j = 0; i >= 0; i--, j++) {
        // console.log(((num % Math.pow(10, digitos - i) - num % Math.pow(10, j)) / Math.pow(10, j)) * Math.pow(10, i));
        newNum += ((num % Math.pow(10, digitos - i) - num % Math.pow(10, j)) / Math.pow(10, j)) * Math.pow(10, i);
    }

    console.log("El numero: '" + num + "', queda invertido asi: '" + newNum + "'");
}

module.exports = ejercicio3;