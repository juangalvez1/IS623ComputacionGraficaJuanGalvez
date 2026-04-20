const ejercicio4 = () => {
    const prompt = require('prompt-sync')();

    let num = parseInt(prompt("Ingrese un número: "));

    let temp = num;
    let digitos = 0;
    while(temp != 0){
        temp = parseInt(temp / 10);
        digitos++;
    }

    let newNum = 0
    for (let i = digitos - 1, j = 0; i >= 0; i--, j++) {
        newNum += ((num % Math.pow(10, digitos - i) - num % Math.pow(10, j)) / Math.pow(10, j)) * Math.pow(10, i);
    }

    if(num == newNum){
        console.log("El numero '" + num + "' es palindromo");
    } else {
        console.log("El numero '" + num + "' NO es palindromo");
    }

}

module.exports = ejercicio4;