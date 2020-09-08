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


//＊コールバック関数
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


//ビルドインオブジェクト
//windowオブジェクトに格納されているもの、検証でwindowと打ち込んだときに頭文字が大文字のものがビルドインオブジェクト
//JSは関数もオブジェクトである

//ラッパーオブジェクト
//プリミティブ値はラッパーオブジェクトをもつ
const a = "komozi".toUpperCase();
console.log(a);

//上記を丁寧に書くと
const b = new String("komozi");
//メソッドが作られる
console.log(b.toUpperCase());
