const numbers = [1, 2, 3, 4];

// 定数numbersにmapメソッドを使って配列を作り、定数doubledNumbersに代入してください
const doubledNumbers=numbers.map((number)=>{
  return number*2;
});

// 定数doubledNumbersを出力してください
console.log(doubledNumbers);


const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Denis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// 定数namesにmapメソッドを使って新しい配列を作り、定数fullNamesに代入してください
const fullNames=names.map((name)=>{
  return name.firstName+name.lastName;
});

// 定数fullNamesを出力してください
console.log(fullNames);
