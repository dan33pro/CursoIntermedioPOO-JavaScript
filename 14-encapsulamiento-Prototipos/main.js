// Encapsulamiento de prototipos
// Para esto aprovechamos el scope y creamos una propiedad con un get y set
// que accedan a las propiedades, lo que conocemos como namespaces

function requieredParam(param) {
    throw new Error(param + " es obligatorio")
}

function LearningPath({
    name = requieredParam("name"),
    courses = [],

}) {
    this.name = name;
    this.courses = courses;
}

function Student({
    name = requieredParam("name"),
    age,
    email = requieredParam("email"),
    approveCourse = [],
    learningPaths = [],
    twitter,
    facebook,
    instagram,
} = {}) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.approveCourse = approveCourse;
    this.socialMedia = {
        twitter,
        facebook,
        instagram,
    };

    // namespaces ( esta tecnica aprovecha el scope para hacer nuestros 
    // atributos "privados"
    const private = {
        "_learningPaths": [],
    };

    // Creamos una propiedad que aproveche el scope para acceder
    // a las propiedades privadas, con un get y un set
    Object.defineProperty(this, "learningPaths", {
        get() {
            return private["_learningPaths"];
        },
    
        set(newLP) {
            if (newLP instanceof LearningPath) {
                private["_learningPaths"].push(newLP);
            } else {
                console.warn("Hay un learningPath no valido");
            }
        },
    });

    if (Array.isArray(learningPaths)) {
        for (indexLearningPath in learningPaths) {
            this.learningPaths = learningPaths[indexLearningPath];
        }
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de desarrollo Web",
    courses: ["Curso de FrontEnd Developer", "Curso de HTML y CSS definitivo"],
});

const escuelaVideoJuegos = new LearningPath({
    name: "Escuela de video juegos",
    courses: ["Curso de Unreal engine 4", "Curso de Unity 3D"],
});

const daniel = new Student({
    name: "Daniel",
    age: 19,
    email: "daniel@platzi.com",
    instagram: "DagoGres",
    twitter: "DagoGres",
    learningPaths: [
        escuelaWeb,
        escuelaVideoJuegos,
        { name: "Impostor", courses: ["fakeCourse"] },
    ],
});