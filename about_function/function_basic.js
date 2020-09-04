//関数名が同じものが二つ書いてある場合、後から書いてある関数が実行される
//重複を避けるために、constを使うこともある
const functionexp = function fn(a, b) {
  console.log(a, b);
}

//オブジェクトargumentsには引数を渡す役割がある
