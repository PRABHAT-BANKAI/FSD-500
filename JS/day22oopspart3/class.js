class Animal {
  #petName // private variable
  constructor(petName, color, breed) {
    
    this.#petName = petName;
    // this.#petName = "jorden" we can  only update private field in class not outside 
    this.color = color;
    this.breed = breed;
  }
  show( sound) {// parameters
    console.log(`${this.#petName}  ${this.color} ${sound}`);
  }
}

class Dog extends Animal {
  constructor(petName, color, breed) {
    super(petName, color, breed);
  
  }
  // show(){// overriding// polymorphism
  //   console.log("hello dog")
  // }
}

let boji = new Dog("boji", "blue", "germanSheperd");
// boji.#petName = "jorden" is not working because we create private variable with #petName
console.log(boji);


boji.show("bark")//arguments