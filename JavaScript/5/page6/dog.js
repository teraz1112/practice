// chalkパッケージをインポートしてください
import chalk from "chalk";

import Animal from "./animal";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    const humanAge = this.getHumanAge();
    
    this.greet();
    // console.logの中身をchalkを使って書き換えてください
    console.log(chalk.yellow(`名前は${this.name}です`));
    
    // console.logの中身をchalkを使って書き換えてください
    console.log(chalk.bgCyan(`犬種は${this.breed}です`));
    
    console.log(`${this.age}歳です`);
    console.log(`人間年齢で${humanAge}歳です`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;