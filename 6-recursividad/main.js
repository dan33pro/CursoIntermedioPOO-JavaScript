function serieDeNnumeros(numero1, numero2) {
 if (numero1 < numero2) {
    console.log(numero1);
    if (numero1 < numero2) {
        return serieDeNnumeros(numero1 + 1, numero2);
    }
    else {
        return numero2;
    }
 }
}

serieDeNnumeros(0, 5);

let numeritos = [5, 4, 3, 2, 1, 0];

function recursividad(numbersArray) {
    if (numbersArray.length != 0) {
        const first = numbersArray[0];
        console.log(first);
        numbersArray.shift();
        return recursividad(numbersArray);
    }
}

console.log("Otro ejemplo con un array :)");
recursividad(numeritos);