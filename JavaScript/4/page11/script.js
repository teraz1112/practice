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
}

// 定数dogにDogクラスのインスタンスを代入してください
const dog=new Dog("レオ",4);

// dogに対してinfoメソッドを呼び出してください
dog.info();
