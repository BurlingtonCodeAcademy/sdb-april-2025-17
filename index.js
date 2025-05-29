
// object method example
const dog = {
    name: "Rover",
    breed: "Golden Retriever",
    bark: function () {
        console.log("The dog goes WOOF!")
    },
    speak: function () {
        console.log(`${this.name} can speak!`);
    }
}

console.log("Dog name", dog.name); // Buddy
console.log("Dog breed", dog.breed); // Golden Retriever
dog.bark(); // The dog goes WOOF!
dog.speak(); // Buddy can speak!

const horse = {
    name: "Spirit",
}

const penguin = {
    speed: "fast",
    color: "black and white",
    swim: function () {
        console.log(`The penguin swims at a ${this.speed} speed!`);
    },
}

const cat = {
    name: "Terrence",
    color: "Brown",
    introduce: function () {
        console.log(`I am a ${this.color} cat named ${this.name}.`)
    },

    // dog says hello to cat
    theySpeak: function () {
        console.log(`${dog.name} says hello to ${cat.name}!`)
    },
    likesToEat: function (food) {
        console.log(`${this.name} likes to eat ${food}`)
    },
    likesToFight: function (x) {
        console.log(`${this.name} likes to fight ${x.speed} penguins!`)
    },
    catMath: function (num1, num2) {
        return num1 + num2 + "meow"
    }
}

console.log("Cat name", cat.name); // Terrence
console.log("Cat color", cat.color); // Brown
cat.introduce()
cat.theySpeak();

cat.likesToEat("fish and chips");

cat.likesToFight(penguin)
console.log(cat.catMath(1, 2)) // 3meow

cat.speech = function () {
    console.log(`${this.name} can give very long speeches!`);
}
cat.speak = dog.speak; // add dog speak method to cat
cat.speak(); // Terrence can speak!
cat.speech();


let pizzaTable = {
    cheap: ["cheese", "sauce", "bread"],
    medium: ["pepperoni", "mushrooms", "onions"],
    expensive: ["anchovies", "truffles", "caviar"],
}

let userTable = {
    admin: {
        username: "admin",
        password: "admin123",
        role: "administrator"
    },
    user: {
        username: "user",
        password: "user123",
        role: "regular user"
    },
    editor: {
        username: "editor",
        password: "editor123",
        role: "content editor"
    },
}

function getDayName(dayNumber) {
    if (dayNumber === 1) return "Monday";
    if (dayNumber === 2) return "Tuesday";
    if (dayNumber === 3) return "Wednesday";
    if (dayNumber === 4) return "Thursday";
    if (dayNumber === 5) return "Friday";
    if (dayNumber === 6) return "Saturday";
    if (dayNumber === 7) return "Sunday";
    return "Invalid day number";
}

console.log(getDayName(1)); // Monday


// traffic light states
let states = {
    green: ["yellow"],
    yellow: ["red"],
    red: ["green", "yellow"],
    yield: ["red"]
}

let currentState = "green";

function enterState(newState) {
    let validTransitions = states[currentState]

    if (validTransitions.includes(newState)) {
        currentState = newState;
        console.log(`the light is now ${currentState}`);
    } else {
        console.log(`Cannot transition from ${currentState} to ${newState}`);
    }
}

enterState("red"); // the light is now yellow