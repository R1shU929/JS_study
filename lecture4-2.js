//4-2 일급 객체
// 함수를 변수처럼 !
// 함수는 기본적으로 객체

function isOddNum(number) {
  console.log((number % 2 ? "홀" : "짝") + "수입니다.");
  return number % 2 ? true : false;
}

const checkIfOdd = isOddNum;

console.log(checkIfOdd(23));
// 객체와 배열의 값으로도 함수 할당 가능
let person = {
  name: "홍길동",
  age: 30,
  married: true,
  introduce: function (formal) {
    return formal
      ? "안녕하십니까. 홍길동 대리라고 합니다."
      : "안녕하세요, 홍길동이라고 해요.";
  },
};

console.log(person.introduce(true));
console.log(person.introduce(false));
// 객체의 다른 프로퍼티에 접근할 떄 꼭 !!! this 사용
let p = {
  name: "홍길동",
  age: 30,
  married: true,
  introduce: function () {
    return (
      `저는 ${this.name}, ${this.age}살이고 ` +
      `${this.married ? "기혼" : "미혼"}입니다.`
    );
  },
};

console.log(p.introduce());
//결과값 반환
function getIntroFunc(name, formal) {
  return formal
    ? function () {
        console.log(`안녕하십니까, ${name}입니다.`);
      }
    : function () {
        console.log(`안녕하세요~ ${name}이라고 해요.`);
      };
}

const hongIntro = getIntroFunc("홍길동", true);
const jeonIntro = getIntroFunc("전우치", false);

hongIntro();
jeonIntro();
