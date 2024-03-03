const numbers = [1, 2, 3, 4];

// filterメソッドを使ってnumbersから偶数を取り出し、定数evenNumbersに代入してください
const evenNumbers=numbers.filter((number)=>{
  return number%2===0;
});

// evenNumbersを出力してください
console.log(evenNumbers);


const characters = [
  {id: 1, name:"にんじゃわんこ", age: 14},
  {id: 2, name:"ベイビーわんこ", age: 5},
  {id: 3, name:"ひつじ仙人", age: 100}
];

// charactersから20歳未満のキャラクターを取り出し、定数underTwentyに代入してください
const underTwenty=characters.filter((character)=>{
  return character.age<20;
});

// underTwentyを出力してください
console.log(underTwenty);
