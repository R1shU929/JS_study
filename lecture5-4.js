// 5-4. 접근자 프로퍼티와 은닉
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
    // 무한반복
    this.no = no;
  }
}
const chain1 = new YalcoChicken("판교", 3); // ⚠️ 오류 발생!
// getter에는 setter
