//varは変数を宣言する前に呼び出ししてもundifinde型が作られエラーにならない

console.log(example);

var example = 0;

//letやconstは変数を宣言する前に呼び出すとエラーになる
console.log(example2);

let example2 = 0;

//AND条件とOR条件
function hello(programing) {
  programing = programing || 'Vue.js'
  console.log('Hello' + programing);
}
hello()
