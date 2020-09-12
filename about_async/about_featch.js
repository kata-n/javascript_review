//fetchでjsonファイルを取得する Peomiseを返す
window.fetch('users.json').then(function (response) {
  console.log(resoponse);
  return response.json();
})

//awaitとasyncでも書ける
async function getUsers() {
  const response = await fetch('users.json');
  const json = await response.json();
}
//実行
getUsers();
