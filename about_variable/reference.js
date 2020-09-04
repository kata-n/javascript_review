//オブジェクトの参照
cconst Apatarn = {
  prop: 'オブジェクト'
}

const Bpatarn = {
  prop: 'オブジェクト'
}

//オブジェクトはメモリの参照先がそれぞれ違う.
//オブジェクトは参照先が比較される部分は押さえておく
console.log(Apatarn === Bpatarn);
//プロパティでの判断の仕方
console.log(Apatarn.prop === Bpatarn.prop);
