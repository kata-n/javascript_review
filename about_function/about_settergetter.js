function Pokemon(name, type) {
  this._name = name;
  this._type = type;
}

Object.defineProperty(Pokemon.prototype, 'name', {

  get: function () {
    return this._name;
  },
  //setには値が渡ってくるのでvalを引数にとる
  set: function (val) {
    this._name = val;
  }
});

let Pokemon1 = new Pokemon('Pika', 'bolt');


//ES6
class Pokemon2 {
  constructor(name, age) {
    this._name = name;
    this._type = type;
  }

  get name() {
    return this._name;
  }
  //setには値が渡ってくるのでvalを引数にとる
  set name(val) {
    this._name = val;
  }

  //インスタンス化せずに使用できるメソッドはスタティックメソッドと呼ぶ
  static Hello() {
    console.log('Hello');
  }

};
