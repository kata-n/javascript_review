//クラスをコンストラクタする
var Monster = function (name, hp, attack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.doattack = function () {
    console.log(this.name + 'は' + this.attack 'のダメージを与えた');
  }
}
//    newしてインスタンス
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
//    以降は同じ
//メソッドを変える時は、下で分けたプロトタイプを上書きする
//プロトタイプでつくったメソッドは各インスタンスと共有されているので、プロトタイプメソッドを上書きするだけで。すべてのインスタンスに反映される


//継承
function Japanese(name, age) {
  Person.call(this, name, age)
}
//プロトタイプ継承
//プロトタイプを別のプロトタイプに追加するのを継承するという
Japanese.prototype = Object.create(Person.prototype);
