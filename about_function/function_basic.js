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


//＊コンストラクタ関数
function Person(name, age) {
  this.name = name;
  this.age = age;
  // プロトタイプ使わない書き方
  // this.hello = hello = function () {
  //   console.log('Hello' + this.name);
  // }
}

//コンストラクタ関数にメソッドを追加する（プロトタイプ）
//上記personオブジェクトにHelloメソッドを追加する
//プロトタイプを使うと、オブジェクトをいくら生成しても下記の関数が参照先となる為下記の関数一つで済む。メモリの効率化となる。
//（プロトタイプを使わずに上記コンストラクタ関数内に書くと、インスタンス化する度に別々の下記関数が作られるので、メモリを圧迫する）
Person.prototype.hello = function () {
  console.log('Hello' + this.name);
}


//関数コンストラクタは、大文字から始まるFunctionの事（あまり使わない）
const constructfunction1 = new Function('number1', 'number2', 'return number1 + number2');

//普通に書いた場合
function Calctest2(number1, number2) {
  return number1 + number2;
}

const result = constructfunction1(1, 2);
console.log(result);
