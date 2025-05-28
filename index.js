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