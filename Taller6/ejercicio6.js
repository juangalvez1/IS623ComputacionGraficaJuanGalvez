const ejercicio6 = () => {
    const prompt = require('prompt-sync')();

    let num = parseInt(prompt("Ingrese un número: "));

    temp = num
    let binaryNum = 0
    for (let i = 0; temp != 0; i++) {
        binaryNum += (temp % 2) * Math.pow(10, i)
        // console.log(temp % 2)
        temp = parseInt(temp / 2)
    }

    console.log("El numero '" + num + "' pasado a binario es: '" + binaryNum + "'")
}

module.exports = ejercicio6;