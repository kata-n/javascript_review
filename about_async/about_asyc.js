function sleep(callback) {
  setTimeout(function () {
    console.log('hello');
    callback();
  }, 1000);
}

//コールバック関数
sleep(function () {
  console.log('callbak done');
})

//ES6 Promise 非同期処理をより簡単に書ける
new Promise(function (resolve, reject) {
  console.log('promise');
})
