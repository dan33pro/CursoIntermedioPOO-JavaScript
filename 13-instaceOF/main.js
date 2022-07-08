// Instance of
// Como ya habíamos visto como validar con Duck Typing y cuales son los 
// problemas que trae con sigo, para eso llegamos acá, en su lugar 
// validaremos que nuestros objetos sean instancias de un objeto en específico.

// Claramente para implementar esta solución vamos a dejar a un lado 
// los objetos literales y en su lugar comenzaremos a trabajar con prototipos. 


function requieredParam(param) {
    throw new Error(param + " es obligatorio")
}

function LearningPath({
    name = requieredParam("name"),
    courses =  [],

}){
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

    if(Array.isArray(learningPaths)){
        this.learningPaths = [];
        for (indexLearningPath in learningPaths) {
            let myLearningPath = learningPaths[indexLearningPath];
            // Instance Of :)
            if(myLearningPath instanceof LearningPath) {
                this.learningPaths.push(myLearningPath);
            }
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
        {name: "Impostor", courses: ["fakeCourse"]},
    ],
});


// Ahora vamos a comenzar a trabajar con el encapsulamiento pero ya no
// en objetos literales, sino con nuestros prototipos.