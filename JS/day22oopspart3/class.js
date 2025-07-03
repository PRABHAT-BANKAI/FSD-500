class Animal {
  constructor(petName, color, breed) {
    this.petName = petName;
    this.color = color;
    this.breed = breed;
  }
  show( sound) {// parameters
    console.log(`${this.petName}  ${this.color} ${sound}`);
  }
}

class Dog extends Animal {
  constructor(petName, color, breed) {
    super(petName, color, breed);
  }
}

let boji = new Dog("boji", "blue", "germanSheperd");
console.log(boji);


boji.show("bark")//arguments