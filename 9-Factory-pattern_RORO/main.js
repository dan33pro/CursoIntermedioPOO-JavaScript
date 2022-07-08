// Es a través de Factory-pattern y el patrón RORO que facilitamos un 
// poco la creación de objetos o el accesos por así decirlo a algunos métodos
// en los que se nos piden parámetros.

// En lugar de pasar los parámetros directamente los pasamos dentro de un 
// objeto, aquí los podremos poner en el orden que queramos y recibirlos 
// en cualquier otro orden, además nos permite darle valores por defecto
// y hasta forzar él envió de alguna propiedad

function requieredParam(param) {
    throw new Error(param + " es obligatorio")
}

function createStudent({
    name = requieredParam("name"),
    age,
    email = requieredParam("email"),
    approveCourse = [],
    learningPaths = [],
    twitter,
    facebook,
    instagram,
} = {}) {
    return {
        name,
        age,
        email,
        approveCourse,
        learningPaths,
        socialMedia: {
            twitter,
            facebook,
            instagram,
        },
    };
}

const daniel = createStudent({
    name: "Daniel",
    age: 19,
    email: "daniel@platzi.com",
    instagram: "DagoGres",
    twitter: "DagoGres",
});

console.log(daniel);