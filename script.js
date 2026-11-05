class Pet{
    constructor (name, type){
        this.name = name;
        this.type = type;
        this.hunger = 50;
    }

    describe(){
        return `I am a ${this.type} named ${this.name}.`;
    }

    feed(){
        this.hunger -= 10;
    }

}

let Dog = new Pet("Kujo", "dog");
let Cat = new Pet("Lily", "cat");

console.log(Dog.describe());
console.log(Cat.describe());


const hungerDisplay = document.getElementById("Hunger");
hungerDisplay.textContent = Dog.hunger;

const foodButton = document.getElementById("feed-button");

foodButton.addEventListener("click", () => {
    Dog.feed();
    hungerDisplay.textContent = Dog.hunger;
});