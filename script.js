class Pet{
    constructor (name, type){
        this.name = name;
        this.type = type;
    }

    describe(){
        return `I am a ${this.type} named ${this.name}.`;
    }
    
}

let Dog = new Pet("Kujo", "dog");
let Cat = new Pet("Lily", "cat");

console.log(Dog.describe());
console.log(Cat.describe());