// Metodos static con clases
class superObject {
    static isObject(subject) {
        return typeof (subject) == "object" && !this.isArray(subject);
    }

    static isArray(subject) {
        return Array.isArray(subject);
    }

    static deepCopy(subject) {
        let copySubject;
        if (this.isArray(subject)) {
            copySubject = [];
        } else if (this.isObject(subject)) {
            copySubject = {};
        }
        else {
            return subject;
        }
        let  key;
        for (key in subject) {
            if (this.isObject(key)) {
                copySubject[key] = this.deepCopy(subject[key]);
            } else {
                if (this.isArray(subject)) {
                    copySubject.push(subject[key]);
                } else {
                    copySubject[key] = subject[key];
                }
            }
        }
        return copySubject;
    }
}

// Metodos static con prototipos
function superObjectProto() { }
superObjectProto.isObject = function (subject) {
    return typeof (subject) == "object" && !this.isArray(subject);
}

superObjectProto.isArray = function isArray(subject) {
    return Array.isArray(subject);
}

superObjectProto.deepCopy = function (subject) {
    let copySubject;
    if (this.isArray(subject)) {
        copySubject = [];
    } else if (this.isObject(subject)) {
        copySubject = {};
    }
    else {
        return subject;
    }

    for (key in subject) {
        if (this.isObject(key)) {
            copySubject[key] = this.deepCopy(subject[key]);
        } else {
            if (this.isArray(subject)) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }
    return copySubject;
}

const myObject = { a: "a", b: { c: "c" } };

let myCopy2 = superObject.deepCopy(myObject);