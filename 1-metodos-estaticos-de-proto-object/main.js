const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],

    addCourse(newCouerse) {
        this.approvedCourses.push(newCouerse);
    }
};

// Los dos primeros devuelven un array con los atributos
console.log("Object.keys:");
console.log(Object.keys(juan));

console.log("\nObject.getOwnPropertyNames: ");
console.log(Object.getOwnPropertyNames(juan));

// Devuelve un array de arrays con los pares clave valor
console.log("\nObject.entries: ");
console.log(Object.entries(juan));
console.log(Object.entries(juan)[3][1]);

// En el ultimo caso vemos como se accede al metodo addCourse
// pero si intentamos usarlo veremos que la referencia this ya no apunta 
// a Juan si no que ahora apunta al array

console.log("\nObject.getOwnPropertyDescriptors: ");
console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan, "pruebaXD", {
    value: "Mi Bebito fiu fiu",
    writable: true,
    enumerable: true,
    configurable: true,
});