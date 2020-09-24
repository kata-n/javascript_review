//10行目にブレークポイントをおいて、CommandとRで実行
let valA = 200;
function fnc1() {
  let valB = 100;
  function fnc2() {
    let ValC = 300;
  }
  fnc2();
}
fnc1();
