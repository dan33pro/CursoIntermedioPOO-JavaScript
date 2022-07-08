// Getters y Setters
// estos funcionan simulando una propiedad pero sin valor
// en su lugar esta propiedad tiene por dentro dos propiedades una
// función get y una set

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
    const private = {
        "_name": name,
    };
    const public = {
        age,
        email,
        approveCourse,
        learningPaths,
        socialMedia: {
            twitter,
            facebook,
            instagram,
        },
        get name() {
            return private["_name"];
        },
        set name(newName) {
            if (newName.length != 0) {
                private["_name"] = newName;
            } else {
                console.warn("El nombre no es valido");
            }
        }
    };
    
    return public;
}

const daniel = createStudent({
    name: "Daniel",
    age: 19,
    email: "daniel@platzi.com",
    instagram: "DagoGres",
    twitter: "DagoGres",
});

daniel.name = "Danny";

console.log(daniel);
console.log(daniel.name);
console.log(Object.getOwnPropertyDescriptors(daniel));