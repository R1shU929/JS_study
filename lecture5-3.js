// 5-3. 클래스
// 클래스란? 객체 생성을 위한 템플릿
// 클래스 = 붕어빵 틀, 객체 = 붕어빵
// 클래스 내 정의된 함수 = 메서드
// 클래스 안의 객체 = 인스턴스
// constructor = 객체를 new로 생성할 때 가장 먼저 호출

// 1. 클래스 이용해 인스턴스 만들기
class YalcoChicken {
  constructor(name, no) {
    this.name = name;
    this.no = no;
  }
  introduce() {
    // 💡 메서드
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}
// ⚠️ 그러나 클래스와 생성자 함수는 다름 !
// 차이점 1 ! 클래스는 호이스팅 불가 !
// 차이점 2 ! 클래스는 new 없이 쓰면 오류고, 생성자 함수는 undefined !

// 2. constructor 메서드
// 클래스 내 "한 개"
// 인스턴스 생성시 인자 받아 프로퍼티 초기화
class Person {
  constructor(name, age, married = false) {
    this.name = name;
    this.age = age;
    this.married = married;
  }
}

const person1 = new Person("박영희", 30, true);
const person2 = new Person("오동수", 18);
console.log(person1, person2);

// 3. 클래스의 메서드
class Dog {
  bark() {
    return "멍멍";
  }
}
const badugi = new Dog();
console.log(badugi, badugi.bark());
// 클래스에서는 함수를 "메서드" 라고 해용 !
// 하지만 생성자 함수에 넣은 함수는 "프로토타입" !
function Dog2() {
  this.bark = function () {
    return "멍멍";
  };
}
const badugi2 = new Dog2();
console.log(badugi2, badugi2.bark());

// 4. 클래스 필드 (약간 이해 못함 ㅋ)
// constructor 밖에서 this 없이 인스턴스의 프로퍼티 정의
// 클래스 내에서 할당연산자 "=" 를 이용해 인스턴스 속성 지정 가능
// 필드값이 지정되어 있으므로 constructor 메서드 필요없음
class Slime {
  hp = 50;
  op = 4;
  attack(enemy) {
    enemy.hp -= this.op;
    this.hp += this.op / 4;
  }
}
const slime1 = new Slime();
const slime2 = new Slime();

slime1.attack(slime2);
console.log(slime1, slime2);

class YalcoChicken {
  no = 0;
  menu = { 후라이드: 10000, 양념치킨: 12000 };

  constructor(name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce() {
    // 메서드
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order(name) {
    // 메서드
    return `${this.menu[name]}원입니다.`;
  }
}
const chain0 = new YalcoChicken("(미정)");
console.log(chain0, chain0.introduce());

// 5 정적 static 필드와 메서드
class YalcoChicken {
  // 정적 변수와 메서드
  static brand = "얄코치킨";
  static contact() {
    return `${this.brand}입니다. 무엇을 도와드릴까요?`;
  } // 여기의 this brand는 정적 메서드 밖의 요소는 접근 불가

  constructor(name, no) {
    this.name = name;
    this.no = no;
  }
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

console.log(YalcoChicken);
console.log(YalcoChicken.contact());
// 정적 메서드는 딱 그 공간만 차지. 딱 1개
