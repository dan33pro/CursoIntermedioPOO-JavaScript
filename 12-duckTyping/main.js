// El duck typing es la forma de programar donde identificamos a nuestros
// objetos dependiendo de los métodos y atributos que tengan por dentro.
// pero como veremos tiene ciertos problemas

function requieredParam(param) {
    throw new Error(param + " es obligatorio")
}

function createLearningPaths({
    name = requieredParam("name"),
    courses =  [],

}){
    const private = {
        "_name": name,
        "_courses": courses,
    };

    const public = {
        get name() {
            return private["_name"];
        },
        set name(newName) {
            if (newName.length != 0) {
                private["_name"] = newName;
            } else {
                console.warn("El nombre no es valido");
            }
        },

        get courses() {
            return private["_courses"];
        },

    };

    return public;
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
        "_learningPaths": learningPaths,
    };
    const public = {
        age,
        email,
        approveCourse,
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
        },
        get learningPaths() {
            return private["_learningPaths"];
        },
        set learningPaths(newLP) {
            // Duck typing :)
            if (newLP.name && newLP.courses && Array.isArray(newLP.courses)) {
                private["_learningPaths"].push(newLP);
            } else {
                console.warn("El learningPath no es valido");
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

daniel.learningPaths = createLearningPaths({
    name: "Escuela de desarrollo Web",
    courses: ["Curso de FrontEnd Developer", "Curso de HTML y CSS definitivo"],
});

daniel.learningPaths = {
    name: "Escuela de video juegos",
    courses: ["Curso de Unreal engine 4", "Curso de Unity 3D"],
};

console.log(daniel.learningPaths);

// Como se puede ver con Duck Typing puedo crear objetos de cero
// y hacerlos pasar como el objeto que estoy validando :(
// pero eso lo resolveremos despues jaja con instance Of