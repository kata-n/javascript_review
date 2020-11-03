//https://sbfl.net/blog/2016/07/13/simplifying-async-code-with-promise-and-async-await/
//コールバックを実行する関数
function callbackrecieved(callbackfn) {
  console.log('callback.exe');
  callbackfn();
}

//コールバック関数
let myCallback = function () {
  console.log('my Callback function');
}

//実行 出力順
callbackrecieved(myCallback);
