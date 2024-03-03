class Animal {
  // 引数に「name」と「age」を追加してください
  constructor(name,age) {
    // 「"レオ"」の代わりに引数nameの値を代入してください
    this.name = name;
    
    // 「3」の代わりに引数ageの値を代入してください
    this.age = age;
  }
}

// 引数に「"モカ"」と「8」を渡してください
const animal = new Animal("モカ",8);

console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);
