// 5-2 생성자 함수
// 같은 형식의 객체를 여러개 만들어야 할 때?

// 1) 생성자 함수로 객체 생성
// 생성자 함수
function YalcoChicken(name, no) {
  // 함수명 대문자
  this.name = name; // this 인스턴스의 프로퍼티들 정의
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  };
}
// 인스턴스 생성 (생성자 함수로 만들어진 객체 = 인스턴스)
const chain1 = new YalcoChicken("판교", 3);
const chain2 = new YalcoChicken("강남", 17);
const chain3 = new YalcoChicken("제주", 24);

// 2) 생성자 함수로 만들어진 객체
// 1. 프로토타입
function YalcoChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  };
}

const chain0 = new YalcoChicken("판교", 3);
console.log(chain0);
// 본사에서 새 업무를 추가
// 프로토타입: 본사에서 배포하는 메뉴얼이라고 이해
YalcoChicken.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};
console.log(chain0.introEng());
// -> chain0은 이전에 만들어진 것이지만 수정되어 영어로 출력
console.log(new YalcoChicken("강남", 17).introEng());
// 뿐만 아니라 새로 만들 인스턴스도 영문프로토타입 기능 가짐

// 2. 타 방식과의 차이 (솔직히 이해 안됨)
function YalcoChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  };
}

function createYalcoChicken(name, no) {
  return {
    name,
    no,
    introduce() {
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    },
  };
}
// 객체 리터럴
const chain4 = {
  name: "판교",
  no: 3,
  introduce: function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  },
};

// 객체 반환 함수
const chain5 = createYalcoChicken("강남", 17);

// 생성자 함수
const chain6 = new YalcoChicken("제주", 24);
console.log(chain4, chain4 instanceof YalcoChicken);
console.log(chain5, chain5 instanceof YalcoChicken);
console.log(chain6, chain6 instanceof YalcoChicken);
