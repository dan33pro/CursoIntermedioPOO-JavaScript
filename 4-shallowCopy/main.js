const object1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
    },
};

// const evita que cambiemos el valor en memoria, pero solo Stack y
// los objetos se guadan en Heap XD
const object2 = {};
for(propiedad in object1) {
    object2[propiedad] = object1[propiedad];
}

// De esta forma podemos copiar un objeto, al menos mientras no tenga propiedades
// con objetos detro jajaja

object2.b = ":)";
console.log({object1, object2});

// Si modificamos algun atributo de c: entonces se modificara en ambos

// Con Object.assingn tambien nos vemos afectados en el atributo c
const object3 = Object.assign({}, object1);

// Este creara un objeto con las propiedades del objeto1, en [[Prototype]]
const object4 = Object.create(object1);
console.log(object4);

// Si modificamos a: y d: en c: tenemos
object4.a = "Interesante"
object4.c.d = "F en el chat";
console.log(object4);
// a: se sobrescribe sin modificar lo que hay en [[Prototype]], pero con c
// tenemos el mismo problema que con assign el objeto1 se ve afectado

// Curiosamnete si modificamos algo en el objeto1, también se va a modificar
// en el [[Prototype]] del objeto4 jajaja

object1.a = "Esto no deberia pasar XD";

// Porque la propiedad [[Prototype]] apunta hacia el object1

// Problemas cunado tenemos objetos dentro de otros objetos, que solucionaremos
// en el siguiente archivo jaja
