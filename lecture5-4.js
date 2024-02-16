// 5-4 접근자 프로퍼티와 은닉
// 1. 접근자 프로퍼티
// getter & setter
// 스스로 값 가지지 않고 다른 프로퍼티 값 읽거나 저장
// 앞에 get이나 set 붙임
const person1 = {
  age: 17,

  get koreanAge() {
    // 접근자 프로퍼티
    return this.age + 1;
  },

  set koreanAge(krAge) {
    // 접근자 프로퍼티
    this.age = krAge - 1;
  },
};
console.log(person1, person1.koreanAge);
// 실행시 프로퍼티처럼 사용 ! 점 코리안 에이지 !
// 클래스에서도 사용 가능
// getter = 반드시 값 반환
// 원하는 방식으로 만들어서 내보냄
// setter = 하나의 인자 받기
// 특정 프로퍼티에 값 저장 방식 조작. 제한

// 필드 이름과 setter의 이름이 같을때
class YalcoChicken {
  constructor(name, no) {
    this.name = name;
    this.no = no;
  }
  get no() {
    return this.no + "호점";
  }
  set no(no) {
    // -> 여기 부분에 다른 필드명 사용해야함 !
    // 무한반복
    this.no = no;
  }
}
const chain1 = new YalcoChicken("판교", 3); // ⚠️ 오류 발생!
// setter에는 다른 필드명 사용 !

// 2. 은닉
// 캡슐화
// 객체 내부의 값을 감추기 !
// 원래는 기본적으로 public (은닉 안됨)

// private 필드를 통한 은닉
class Employee {
  #name = ""; // 필드명 앞에 #붙이기
  #age = 0; // 이렇게 클래스 안에 정의하기
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
}

const emp1 = new Employee("김복동", 32);

// 클래스 내에서는 pri
