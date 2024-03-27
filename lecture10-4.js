// 10-4 제너레이터
function* genFunction() {
  console.log("하나");
  yield "하나";
}

const getFunc = genFunction();
// 함수 내 코드들을 모두 실행하지 않고 외부 호출자에게 제어권 양도
// 어터러블과 이터레이터 간결하게 구현 가능

// 1. 기본 사용법
// 1) 제너레이터 함수/메서드 선언
// function 다음 아님 메서드 앞에 *

// 함수
function* genFunc1() {
  yield "genFunc1";
}

// 값으로 대입
const genFunc2 = function* () {
  yield "genFunc";
};

// 객체 메서드
const obj = {
  *genFunc3() {
    yield "genFunc3";
  },
};

// 클래스의 메서드
class MyClass {
  *genFunc4() {
    yield "genFunc4";
  }
}

// 제너레이터 실전에 잘 안 씀 ! (실력자..)

// 2. 제너레이터 객체
// 제너레이터 함수의 결과값으로 반환
