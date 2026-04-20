const ejercicio5 = () => {
    const prompt = require('prompt-sync')();

    let num = parseInt(prompt("Ingrese un número: "));
    let digit = parseInt(prompt("Ingrese el digito a buscar en el numero: "));

    let temp = num;
    let digitos = 0;
    while(temp != 0){
        temp = parseInt(temp / 10);
        digitos++;
    }

    let counter = 0;
    temp = num
    for (let i = 0; i < digitos; i++) {
        let curr = temp % 10;
        if(curr === digit){
            counter++;
        }
        temp = parseInt(temp / 10);
    }

    console.log("El digito '" + digit + "' aparece " + counter + " veces en el numero '" + num + "'")

}

module.exports = ejercicio5;