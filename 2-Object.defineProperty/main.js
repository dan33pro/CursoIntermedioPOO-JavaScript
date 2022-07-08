const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],

    addCourse(newCouerse) {
        this.approvedCourses.push(newCouerse);
    }
};

Object.defineProperty(juan, "pruebaNasa", {
    value: "extraterrestre",
    writable: false,
    enumerable: false,
    configurable: false,
});

Object.defineProperty(juan, "navegador", {
    value: "edge",
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(juan, "editor", {
    value: "VSCode",
    writable: false,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(juan, "consola", {
    value: "zsh",
    writable: true,
    enumerable: true,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(juan));

console.log("\nEn la propiedad navigator cambiamos a false enumerable:");
console.log("Con Object.keys: ");
console.log(Object.keys(juan));
console.log("\nCon Object.getOwnPropertyNames: ");
console.log(Object.getOwnPropertyNames(juan));

console.log("\n\nEn la propiedad editor dejamos false writable:");
console.log("Si le intentamos cambiar el valor no funciona:");
juan.editor = "Atom";
console.log(juan.editor);
console.log("Pero si la podemos borrar con delete juan.editor");

console.log("\n\nEn la propiedad consola dejamos solo false el configurable:");
console.log("Si la intentamos borrar no funciona");
delete juan.consola;
console.log(juan.consola);

console.log("por lo que la propiedad pruebaNasa no se puede listar con Object.keys, no se puede editar, ni eliminar");

const lucas = {
    name: "Lucas",
    age: 20,
    approvedCourses: ["Curso 3"],

    addCourse(newCouerse) {
        this.approvedCourses.push(newCouerse);
    }
};

Object.seal(lucas);
console.log("\nObject.seal(objeto) pone falso el configurable de sus atributos: no se pueden borrar");
console.log(Object.getOwnPropertyDescriptors(lucas));


const daniel = {
    name: "Danny",
    age: 19,
    approvedCourses: ["Curso 4"],

    addCourse(newCouerse) {
        this.approvedCourses.push(newCouerse);
    }
};

Object.freeze(daniel);
console.log("\nObject.freeze(objeto) pone false tanto writable como configurable: no se pueden ni borrar ni editar sus atributos");
console.log(Object.getOwnPropertyDescriptors(daniel));

// Este efecto pasa tanto en los atributos como en los metodos de los objetos
// ya que en JS los metodos de un objeto se guardan dentro de una propiedad
// que tiene por valor una función :)

//Todo esto es perfecto para encapsular las propiedades de nuestros objetos 😎