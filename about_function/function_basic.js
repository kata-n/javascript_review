//関数名が同じものが二つ書いてある場合、後から書いてある関数が実行される
//重複を避けるために、constを使うこともある
const functionexp = function fn(a, b) {
  console.log(a, b);
}

//オブジェクトargumentsには引数を渡す役割がある

//javascriptにおける関数は実行できるオブジェクトである
//関数名に（）カッコをつけることで実行される。
function add() {
  return 3;
}


//コールバック関数
//jsは関数を値として扱えるので、関数に関数を渡す事ができる(高階関数)

//渡された関数を実行する関数
function doTwiceGreeting(func) {
  func('おはようございます');
  func('Hello');
}

//高階関数へ渡す関数、これがコールバック関数
doTwiceGreeting(function (message) {
  console.log(message);
})
