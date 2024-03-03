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
  // getHumanAgeメソッドを追加してください
  getHumanAge(){
    return this.age*7;
  }

}

const dog = new Dog("レオ", 4);
dog.info();

// 定数humanAgeを定義し、定数dogに対してgetHumanAgeメソッドを呼び出した値を代入してください
const humanAge=dog.getHumanAge();

// 「人間年齢で〇〇歳です」と出力してください
console.log("人間年齢で"+humanAge+"歳です");
