function isObject(subject) {
    return typeof(subject) == "object";
}

function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;
    if(isArray(subject)) {
        copySubject = [];
    } else if (isObject(subject)) {
        copySubject = {};
    }
    else {
        return subject;
    }

    for (key in subject) {
        if (isObject(key)) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if(isArray(subject)) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }
    return copySubject;
}

const estudianeteBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approveCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
};

const juan = deepCopy(estudianeteBase);

// Podemos no solo crear propiedades sino modificarlas
Object.defineProperty(
    juan, "name", {
        value: "Juan",
        configurable: false,
    }
);

// Ponemos configurable false en todas sus propiedades
Object.seal(juan);
juan.email = "juan@platzi.com";
juan.age = 18;
juan.approveCourses = [];

console.log(juan);
console.log("Ha pasado juan por Object.seal(): " + Object.isSealed(juan));
console.log("Ha pasado juan por Object.freeze(): " + Object.isFrozen(juan));