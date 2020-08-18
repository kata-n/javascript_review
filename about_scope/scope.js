let a = 0;
var b = 0;
function c() {
}
debugger;

//constやletでのスコープはスクリプトスコープとなる。

//varで宣言したものはwindowオブジェクトの範囲となるのは押さえておく
//グローバルスコープはwindowオブジェクトと同義となる
console.log(window.b);
