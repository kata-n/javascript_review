//1メソッド呼び出しパターン
var MyObject = {
  value: 10,
  show: function () {
    //このthisはMyObject（メソッド）を指している
    //console.log(MyObject.value);同じ意味
    console.log(this.value); //MyObjectの中の”10”
    console.log(this); //MyObject
  }
}
MyObject.show(); //ここでメソッド呼び出し


//2.関数の呼び出しパターン
//関数呼び出しのthisはWindowオブジェクトを指す
MyObject.show(); //メソッド呼び出し
show(); //関数の呼び出し
//関数として実行される場合、thisはグローバルオブジェクトをさす
function() {
  console.log(this);
  this.value = 1;
}
show(); //ここで関数呼び出し


//3コンストラクタ呼び出しパターン
//コンストラクタ
function MyObject(value) {
  this.myvalue = value;
  this.myFunc = function () {
    this.myValue++;
  }
}
//newしてインスタンス
var MyObject = new MyObject(0);
console.log(MyObject.myvalue); //0
MyObject.myFunc();
console.log(MyObject.myvalue); //1

var MyObject2 = new MyObject(3);
console.log(MyObject.myvalue); //3
MyObject.myFunc();
console.log(MyObject.myvalue); //4

//newを付けない場合、関数呼び出しとなる為windowオブジェクトとなる


//4apply,call呼び出しパターン
var MyObject = {
  value: 1;
  show: function () {
    console.log(this.value);
  }
};
var yourObject = {
  value: 3;
};

MyObject.show(); //1
//appryやcallを使うとthisを指定する事ができる
MyObject.show.apply(yourObject); //3
MyObject.show.call(yourObject); //3
