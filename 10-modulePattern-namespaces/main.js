// Con module pattern y namespaces queremos proteger las propiedades de nuestros objetos
// esto atraves de un objeto público y uno privado, con métodos dentro del publico
// que pueden acceder a las propiedades del privado, pero el usuario no tendrá acceso directo al
// objeto privado

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
        readName() {
            return private["_name"];
        },
        changeName(newName) {
            private["_name"] = newName;
        },
    };

    Object.defineProperty(public, "changeName", {
        writable: false,
        configurable: false,
    });
    Object.defineProperty(public, "readName", {
        writable: false,
        configurable: false,
    });
    
    return public;
}

const daniel = createStudent({
    name: "Daniel",
    age: 19,
    email: "daniel@platzi.com",
    instagram: "DagoGres",
    twitter: "DagoGres",
});

daniel.changeName("Danny");

console.log(daniel);
console.log(daniel.readName());