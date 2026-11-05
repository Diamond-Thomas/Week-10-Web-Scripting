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


function addPet() {
    // get name from input and create a new pet
    const petName = document.getElementById("pet-name").value;
    const newPet = new Pet(petName, "pet");

    //get div id 
    const sanctuary = document.getElementById("sanctuary");


    //create a card for the new pet
    const petCard = document.createElement("div");


    // information about the pet displayed on the card / creating elements for the card
    const petHeading = document.createElement("h3");
    petHeading.textContent = newPet.name;

    const petHunger = document.createElement("p");
    petHunger.textContent = newPet.hunger;

    const petFeedButton = document.createElement("button");
    petFeedButton.textContent = "Feed";

    petFeedButton.addEventListener("click", () => {
        newPet.feed();
        petHunger.textContent = newPet.hunger;
    });

    const hungerDisplay = document.getElementById("Hunger");
    hungerDisplay.textContent = Dog.hunger;

    const foodButton = document.getElementById("feed-button");

   foodButton.addEventListener("click", () => {
    Dog.feed();
    hungerDisplay.textContent = Dog.hunger;
    });
    

    //putting the elements together to form the card
    petCard.appendChild(petHeading);
    petCard.appendChild(petHunger);
    petCard.appendChild(petFeedButton);

    //add to div id sanctuary
    sanctuary.appendChild(petCard);
}