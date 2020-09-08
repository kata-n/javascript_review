//ES６より、コンストラクター関数をクラス表記で表せる様になった
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello' + this.name);
  }
}

//japaneseクラスを継承する
class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }

  //Japaneseに追加したいメソッドをこの中に記述できる
  hello() {
    console.log('Japanese Hello' + this.name);
  }
}

const Yamada = new Japanese('Yamada', 23, 'Man');
console.log(Yamada);
Yamada.hello()
