const check = (number) => {
  // numberが3の倍数かどうかを戻り値として返してください
  return number%3===0;
  
};

// if文の条件式で、checkを呼び出してください
if (check(123)) {
  console.log("3の倍数です");
} else {
  console.log("3の倍数ではありません");
}
