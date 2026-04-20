const ejercicio7 = () => {
    const prompt = require('prompt-sync')();

    let num = parseInt(prompt("Ingrese un número: "));

    let prime = "es primo";
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num <= 1){
            prime = "No es primo";
            break;
        }
        if (num % i == 0){
            prime = "NO es primo";
            break;
        }
    }

    let type = "";
    if (num % 2 == 0){
        type = "es par";
    } else {
        type = "es impar";
    }

    console.log("El numero '" + num + "' " + prime + " y " + type);
}
module.exports = ejercicio7;