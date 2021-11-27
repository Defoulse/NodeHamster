class Hamster {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return console.log('%s makes hamster sound', this.name);
    }
    spinWheel(speed) {
        return console.log('%s ran with speed of %d km/h for 5 minutes and traveled %d km', this.name, speed, (speed / 60) * 5);
    }
    food() {
        return console.log("Eats everything what human gives him");
    }
}

class DefaultHamster extends Hamster {
    speak() { return console.log("pepepepe")}
}

class DzungarianHamster extends Hamster {
    speak() { return console.log("popopopo")}
    food() {return console.log("Dzungarian hamster likes to eat carrot, salat, bell pepper, and SCREAMS LIKE A HELL!")}
}

class WildHamster extends Hamster {
    speak() {return console.log("rrrrrrrrr")}
}

class AngoraHamster extends Hamster {
    speak() {return console.log("pupupupupu")}
    food() {return console.log("Angora hamster likes to eat pumpkin, carrot, tomato, and salat")}
}

class ToyHamster extends Hamster {
    speak() {return console.log("Squicky sound")}
}

const hamsters = ["default", "dzungarian", "wild", "angora", "toy"];
const actions = ["speak", "run", "food"];
var hamster;
var arguments = process.argv.slice(2);
if (arguments[0] === "-hamster" &&  hamsters.includes(arguments[1])) {
    if (arguments[1] === hamsters[0]) {
        hamster = new DefaultHamster("Bob");
        console.log('My name is %s', hamster.name);
    }
    else if (arguments[1] === hamsters[1]) {
        hamster = new DzungarianHamster("Alex");
        console.log('My name is %s', hamster.name);
    }
    else if (arguments[1] === hamsters[2]) {
        hamster = new WildHamster("Sam");
        console.log('My name is %s', hamster.name);
    }
    else if (arguments[1] === hamsters[3]) {
        hamster = new AngoraHamster("Frank");
        console.log('My name is %s', hamster.name);
    }
    else if (arguments[1] === hamsters[4]) {
        hamster = new ToyHamster("Joily");
        console.log('My name is %s', hamster.name);
    }

    if (arguments[2] === "-action" && actions.includes(arguments[3])) {
        if (arguments[3] === actions[0]) {
            hamster.speak();
        }
        else if (arguments[3] === actions[1]) {
            if (arguments[4]) {
                hamster.spinWheel(arguments[4]);
            }    
            else {
                console.log("Please enter speed amount after run");
            }
        }
        else if (arguments[3] === actions[2]) {
            hamster.food();
        }
    }
    else {
        console.log('%s %s', "Try use one of the actions:", actions);
    }
}
else {
    console.log('%s %s', "Try use one of the hamsters:", hamsters);
}