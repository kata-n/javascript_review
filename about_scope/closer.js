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

function main() {
  {
    var xxx = 'c';
  }
  console.log(xxx);
}
main();

//関数の関数の生成を行う際にも使用される
function addNumberFactory(num) {
  function addNumber(value) {
    return num + value;
  }
  return addNumber
}

//引数によって動的に関数の実行をしてくれる
const addfunction = addNumberFactory(5);
const addresult1 = addfunction(10);
const addresult2 = addfunction(5);
console.log('動的な関数の実行結果：' + addresult1);
console.log('動的な関数の実行結果：' + addresult2);


//即時関数 関数定義と同時に一度だけ実行される関数
let sokuzi = (function () {

  let privateValue = 0;
  let publicValue = 100;

  function privateFn() {
    console.log('privateFn is called');
  }

  function publicFn() {
    console.log('publicFn is called');
  }

  //publicValue,publicFnは外からでも呼べる様にする（returnを使用)
  return {
    publicFn,
    publicValue
  };

})()

sokuzi.publicValue();
