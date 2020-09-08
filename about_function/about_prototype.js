//クラスをコンストラクタする
var Monster = function (name, hp, attack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.doattack = function () {
    console.log(this.name + 'は' + this.attack 'のダメージを与えた');
  }
}
//newしてインスタンス
var me = new Monster('わたし', 100, 200);
var anata new Monster('あなた', 200, 100);

console.log(me.doattack());
console.log(anata.doattack());
//メソッドの中身を変えるときは、インスタンスしたもので別個で上書きしていく
//上記の場合だとそれぞれのインスタンスを修整しないといけなくなりあんまりよくない

//そこでつかうのがプロトタイプと言われるもの
//プロトタイプではコンストラクタの中にメソッドを使わない。
var Monster = function (name, hp, attack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
}
//下で分けてメソッドを作成
Monster.prototype.doattack = function () {
  console.log(this.name + 'は' + this.attack 'のダメージを与えた');
}
// 以降は同じ
//メソッドを変える時は、下で分けたプロトタイプを上書きする
//プロトタイプでつくったメソッドは各インスタンスと共有されているので、プロトタイプメソッドを上書きするだけで。すべてのインスタンスに反映される




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


//継承
function Japanese(name, age) {
  Person.call(this, name, age)
}
//プロトタイプ継承
//プロトタイプを別のプロトタイプに追加するのを継承するという
Japanese.prototype = Object.create(Person.prototype);
