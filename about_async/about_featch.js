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

//例外処理の書き方
async function fetchUsers() {
  const response = await fetch('users.json');
  if (response.ok) {
    const json = await response.json();
    return json;
  }
}

async function init() {
  const users = await fetchUsers();
  for (const user of users) {
    console.log(`${user.name},${user.age}`)
  }
}
init();
