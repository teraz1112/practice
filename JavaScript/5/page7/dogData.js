// readline-syncをインポートしてください
import readlineSync from "readline-sync";


import Dog from "../class/dog";

const dog1 = new Dog("レオ", 4, "チワワ");

// readlineSync.questionを使って書き換えてください
const name = readlineSync.question("名前を入力してください: ");

// readlineSync.questionIntを使って書き換えてください
const age = readlineSync.questionInt("年齢を入力してください: ");

// readlineSync.questionを使って書き換えてください
const breed = readlineSync.question("犬種を入力してください: ");

const dog2 = new Dog(name, age, breed);

export { dog1, dog2 };