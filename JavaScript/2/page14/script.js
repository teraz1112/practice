const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
  // 要素を追加してください
  {name: "とりずきん"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`名前は${character.name}です`);
  console.log(`${character.age}歳です`);
}
