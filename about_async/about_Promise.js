//Promise 非同期処理、並列で処理したい時に使う
//5秒後にhelloを出力してからworldを出力
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('hello');
    resolve();
  }, 5000);
});

promise.then(() => console.log('world!'));


function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}

Promise.all([sleep(2)])
sleep(0).then(function (val) {
  return sleep(val);
}).then(function (val) {
  return sleep(val);
});
