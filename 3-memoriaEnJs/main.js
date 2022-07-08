const juanito = {
    age: 20,
    email: "juan22@platzi.com",
}

const matius = juanito;
console.log({juanito, matius});

matius.email = "elMath@platzi.com";
matius.age = 18;
console.log({juanito, matius});

// Al hacer esto tenemos dos referencias apuntando al mismo objeto
// o lo que es igual, al mismo espacio en memoria
// así que si modificamos los valores en una, también lo haran en la otra
// Esto se debe a la memoria Stack y Heap, y como trabajan dependiendo del tipo
// de dato :) primitivos o objetos.