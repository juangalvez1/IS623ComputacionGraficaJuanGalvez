const ejercicio8 = () => {
    const prompt = require('prompt-sync')();

    const ejercicio1 = require('./ejercicio1');
    const ejercicio2 = require('./ejercicio2');
    const ejercicio3 = require('./ejercicio3');
    const ejercicio4 = require('./ejercicio4');
    const ejercicio5 = require('./ejercicio5');
    const ejercicio6 = require('./ejercicio6');
    const ejercicio7 = require('./ejercicio7');
    
    let opcion = 0;
    do {
        console.log("\n========= MENÚ =========");
        console.log("1. Ejecutar ejercicio 1");
        console.log("2. Ejecutar ejercicio 2");
        console.log("3. Ejecutar ejercicio 3");
        console.log("4. Ejecutar ejercicio 4");
        console.log("5. Ejecutar ejercicio 5");
        console.log("6. Ejecutar ejercicio 6");
        console.log("7. Ejecutar ejercicio 7");
        console.log("0. Salir");

        opcion = parseInt(prompt("Seleccione una opción: "));
        console.log()

        switch (opcion) {
        case 1:
            ejercicio1();
            break;
        case 2:
            ejercicio2();
            break;
        case 3:
            ejercicio3();
            break;
        case 4:
            ejercicio4();
            break;
        case 5:
            ejercicio5();
            break;
        case 6:
            ejercicio6();
            break;
        case 7:
            ejercicio7();
            break;
        case 0:
            console.log("Hasta luego!");
            break;
        default:
            console.log("Opción inválida. Intente de nuevo");
        }

    } while (opcion !== 0);
};
ejercicio8()