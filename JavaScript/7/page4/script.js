const call = (callback) => {
  callback("にんじゃわんこ", 14);
};

// 関数callの引数の中で2つの引数を取る関数を追加してください
call((name,age) => {
  console.log(`${name}は${age}歳です。`);
});
