class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog extends Animal {
  // infoメソッドを追加してください
  info(){
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
    
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

const dog = new Dog("レオ", 4);
dog.info();

