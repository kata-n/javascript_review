//letとconstの違いは再代入ができるかできないか
//一度代入した値を変更する場合はlet　変更したくない場合はconstを使う
let example = 0;
example = 1; //許される

const example2 = 0;
//エラーとなる
// example2 = 1;


//ブロックスコープとの違い
{
  let blockscope_error = 0;
  let blockscope_ok = 3;
  console.log(blockscope_ok);
}

//letやconstで宣言するとブロックスコープの範囲内（括弧の中)でしか参照できないため、下記はエラーとなる
console.log(blockscope);
