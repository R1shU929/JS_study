// 5-5. 상속
// 상속 : 서로 다른 클래스나 생성자 함수가 같은 속성 공유시, 이들의 관계 정의
// b는 a로 부터 파생된다 !

// 1. 클래스의 상속 문법
// bird > eagle,penguin > emperorpenguin

class Bird {
  wings = 2;
}
class Eagle extends Bird {
  claws = 2;
}
class Penguin extends Bird {
  swim() {
    console.log("수영중...");
  }
}
class EmperorPenguin extends Penguin {
  size = "XXXL";
}

// 클래스의 각 인스턴스 생성
const birdy = new Bird();
const eaglee = new Eagle();
const pengu = new Penguin();
const pengdol = new EmperorPenguin();

// 6만 false로 반환 = birdy를 따라 올라가면 bird가 나오지, Eagle이 나오진 않음
for (const i of [
  ["1.", birdy instanceof Bird],
  ["2.", eaglee instanceof Bird],
  ["3.", eaglee instanceof Eagle],
  ["4.", pengdol instanceof Penguin],
  ["5.", pengdol instanceof Bird],
  ["6.", birdy instanceof Eagle], // false
]) {
  console.log(i[0], i[1]);
}
// extends (부모 클래스) 로 상속 !
// 자식 클래스는 부모 속성 그대로 가져옴

// 2. 오버라이딩
// 자식클래스에서 부모한테 물려받은 속성 덮어씀
class Bird {
  wings = 2;
  canFly = true;
  travel() {
    console.log("비행중...");
  }
}
class Eagle extends Bird {
  claws = 2;
}
class Penguin extends Bird {
  canFly = false; // 원래 true였는데 false로 덮어씀
  travel() {
    console.log("수영중...");
  }
}
// 3. super
// 부모 클래스의 constructor 또는 메서드 호출
class YalcoChicken {
  no = 0;
  menu = { 후라이드: 10000, 양념치킨: 12000 };

  constructor(name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order(name) {
    return `${this.menu[name]}원입니다.`;
  }
}

class ConceptYalcoChicken extends YalcoChicken {
  #word = "";
  constructor(name, no, word) {
    super(name, no); // 부모클래스 호출 !
    this.#word = word;
  }
  introWithConcept() {
    return super.introduce() + " " + this.#word;
  }
  order(name) {
    return super.order(name) + " " + this.#word;
  }
}

const pikaChain = new ConceptYalcoChicken("도봉", 50, "피카피카~");
