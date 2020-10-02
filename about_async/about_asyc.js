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

//AwaitとAsync
//AsyncはPromiseを返却する関数の宣言を行う
//AwaitはPromiseを返却する関数の非同期処理が完了するまで待つ
function sleep(callback_value) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log(callback_value++);
      resolve(callback_value);
    }, 2000);
  });
}

//async関数のなかでswaitを使う
async function init() {
  let callvalue = await sleep(0);
  callvalue = await sleep(callvalue);
  callvalue = await sleep(callvalue);
  callvalue = await sleep(callvalue);
  console.log(callvalue);
}

init();
