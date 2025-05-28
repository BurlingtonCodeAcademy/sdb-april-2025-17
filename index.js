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

const cat = {
    name: "Terrence",
    color: "Brown",
    introduce: function () {
        console.log(`I am a ${this.color} cat named ${this.name}.`)
    },

    // dog says hello to cat
    theySpeak: function () {
        console.log(`${dog.name} says hello to ${this.name}!`)
    }
}

console.log("Cat name", cat.name); // Terrence
console.log("Cat color", cat.color); // Brown
cat.introduce()
cat.theySpeak();