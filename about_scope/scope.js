//constやletで宣言したものスコープはスクリプトスコープとなる。
let a = 0;

//varで宣言したものはwindowオブジェクトの範囲となるのは押さえておく
var b = 0;

//グローバルスコープはwindowオブジェクトと同義となる
console.log(window.b);

//ブロックスコープも同じ
const existance = 'ある';

if (existance) {
  const c = function () {
    console.log('c is called');
  }
  c();
}

//errorになる
c();
