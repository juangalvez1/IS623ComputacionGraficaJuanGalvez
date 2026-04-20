const ejercicio1 = () => {
    const prompt = require('prompt-sync')();

    let num = parseInt(prompt("Ingrese un número: "));
    
    let sum = 0;
    for(let i = 0; i < num; i++){
        if (num % i == 0){
            sum += i;
        }
    }

    if(sum === num){
        console.log("El numero '" + num + "' es un numero perfecto");
    } else {
        console.log("El numero '" + num + "' NO es un numero perfecto");
    }
}

module.exports = ejercicio1;