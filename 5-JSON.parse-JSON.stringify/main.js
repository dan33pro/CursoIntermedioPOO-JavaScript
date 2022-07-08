const object1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
    },
};

// const evita que cambiemos el valor en memoria, pero solo Stack y
// los objetos se guadan en Heap XD

// Con JSON.stringify transcribimos nuestro objeto en un string
const stringJsonObjetoComplejo = JSON.stringify(object1);
console.log(typeof(stringJsonObjetoComplejo));
console.log(stringJsonObjetoComplejo);

// Con este pasamos del string JSON a un objeto 😎
const object2 = JSON.parse(stringJsonObjetoComplejo);
console.log(typeof(object2));
console.log(object2);

// Y estos sin son objetos completamente distintos, no hay propiedades con 
// apuntadores en memoria al mismo objeto

// pero no todo son flores color rosa, si intentamos 
// copiar un metodo, un undefined o un Symbol dentro de un objeto
// solo se omitira :( así que no es una muy buena practica