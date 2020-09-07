//1メソッド呼び出しパターン
let MyObject1 = {
  value: 10,
  show: function () {
    console.log(this.value); //MyObjectの中の”10”
    console.log(this); //MyObject
  }
}
//オブジェクトのメソッドを呼び出した時のthisは、オブジェクト自身をさす
//console.log(MyObject.value)と同じ意味
MyObject1.show();

//アロー関数で書かれていると、挙動が変わるので（アロー関数はthisを扱えない）注意
let MyObjectArrow = {
  value: 10,
  show: () => {
    console.log(this.value); //WindowオブジェクトのValueを探しに行ってしまう
    console.log(this); //Window
  }
}
MyObjectArrow.show();

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
let MyObject4 = {
  value: 1;
  show: function () {
    console.log(this.value);
  }
};

let yourObject = {
  value: 3;
};

//オブジェクトのメソッドを実行（1メソッド呼び出しパターン）
MyObject4.show(); //1
//appryやcallを使うとthisを指定する事ができる
//applyは実行まで行う、配列に対応している
MyObject4.show.apply(yourObject); //3
//callは実行まで行う、配列には対応していない
MyObject4.show.call(yourObject); //3
