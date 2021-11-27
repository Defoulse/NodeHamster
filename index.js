class Hamster {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return console.log('%s makes hamster sound', this.name);
    }
}

class DefaultHamster extends Hamster {
    speak() { return console.log("pepepepe")}
}

class DzungarianHamster extends Hamster {
    speak() { return console.log("popopopo")}
}

class WildHamster extends Hamster {
    speak() {return console.log("rrrrrrrrr")}
}

class AngoraHamster extends Hamster {
    speak() {return console.log("pupupupupu")}
}

class ToyHamster extends Hamster {
    speak() {return console.log("Squicky sound")}
}

const hamsters = ["default", "dzungarian", "wild", "angora", "toy"];
const actions = ["speak"];
var hamster;
var arguments = process.argv.slice(2);
if (arguments[0] === "-hamster" &&  hamsters.includes(arguments[1])) {
    if (arguments[1] === hamsters[0]) {
        hamster = new DefaultHamster("Bob");
        console.log('My name is %s', hamster.name);
    }
    if (arguments[1] === hamsters[1]) {
        hamster = new DzungarianHamster("Alex");
        console.log('My name is %s', hamster.name);
    }
    if (arguments[1] === hamsters[2]) {
        hamster = new WildHamster("Sam");
        console.log('My name is %s', hamster.name);
    }
    if (arguments[1] === hamsters[3]) {
        hamster = new AngoraHamster("Frank");
        console.log('My name is %s', hamster.name);
    }
    if (arguments[1] === hamsters[4]) {
        hamster = new ToyHamster("Joily");
        console.log('My name is %s', hamster.name);
    }

    if (arguments[2] === "-action" && actions.includes(arguments[3])) {
        if (arguments[3] === actions[0]) {
            hamster.speak();
        }
    }
    else {
        console.log('%s %s', "Try use one of the actions:", actions);
    }
}
else {
    console.log('%s %s', "Try use one of the hamsters:", hamsters);
}