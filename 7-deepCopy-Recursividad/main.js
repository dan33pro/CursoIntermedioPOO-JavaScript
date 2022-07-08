const object1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
    },
    editA() {
        this.a = "AAA";
    }
};

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

const object2 = deepCopy(object1);
console.log(object2);