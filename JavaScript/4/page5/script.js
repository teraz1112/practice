class Animal {
  constructor() {
    // nameの値に文字列「レオ」を代入してください
    this.name="レオ";
    
    // ageの値に数値の「3」を代入してください
    this.age=3;
  }
}

const animal = new Animal();

// 「名前: 〇〇」となるように出力してください
console.log(`名前: ${animal.name}`);

// 「年齢: 〇〇」となるように出力してください
console.log(`年齢: ${animal.age}`);
