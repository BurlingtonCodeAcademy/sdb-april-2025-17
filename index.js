// object method example
const dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    bark: function () {
        console.log("The dog goes WOOF!")
    }
}

console.log("Dog name", dog.name); // Buddy
console.log("Dog breed", dog.breed); // Golden Retriever
dog.bark(); // The dog goes WOOF!