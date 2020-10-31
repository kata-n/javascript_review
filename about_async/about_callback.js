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
