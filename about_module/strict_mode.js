'use strict'
//strictモード
function globalvariable() {
  index_num = 0;
  console.log(index_num);
}
globalvariable();
//JS本来なら関数外でもconsole.logで呼び出せるけど、strictを記述するとエラーになる
