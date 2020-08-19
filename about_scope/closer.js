//宣言した変数を外部から変更することはできないが、値が保持されず三回実行されるだけ
increment();
increment();
increment();

function increment() {
  let num = 0;
  num = num + 1;
  console.log(num);
}

//クロージャは関数の内部に変数宣言をもつ（外部から宣言内容を変更されないのがポイント）
function incrementFactory() {

  let num2 = 0;

  function increment2() {
    num2 = num2 + 1;
    console.log(num2);
  }

  return increment2;
}

//クロージャの呼び出し
const increment2 = incrementFactory();

increment2();
increment2();
increment2();
