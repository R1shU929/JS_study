// 6-2 빌트인 전역 프로퍼티와 함수

// 1. 빌트인 전역 프로퍼티
// 스스로 다른 프로퍼티나 메서드를 갖지 않고 "값"만 반환
console.log(globalThis.Infinity);
console.log(globalThis.NaN);
console.log(globalThis.undefined);
// lobalThis 스스로에 대한 참조를 프로퍼티로 포함

// 2. 빌트인 전역 함수

// 1) eval - 문자열로 된 코드를 받아 실행함
const x = eval("1 + 2 + 3");

// 객체나 함수의 리터럴은 괄호로 감싸야 함
const obj = eval("({a: 1, b: 2})");

console.log(x, obj); // 6과 object로 반환
// 매우 특별한 경우 아니면 사용 x

// 2) isFinite - 유한수 여부 반환
console.log(isFinite(1), isFinite(0), isFinite("1"), isFinite(null)); // 유한수 = true

console.log(
  isFinite(1 / 0),
  isFinite(Infinity),
  isFinite(-Infinity),
  isFinite(NaN),
  isFinite("abc")
); // 무한수 = false

// 3) isNaN - NaN (낫넘버) 여부 반환
console.log(isNaN(NaN), isNaN("abcde"), isNaN({}), isNaN(undefined)); // 숫자로 인식될 수 없음 = true
// NaN 타입 아니여도 변환해서 평가

// 4) parseFloat - 인자로 받은 값을 "실수"로 반환
console.log(
  parseFloat(123.4567),
  parseFloat("123.4567"),
  parseFloat(" 123.4567 ")
); // 다 123.4567로 반환 !
// 숫자로 변환 안 되면 NaN으로 반환

// 5) parseInt - 인자로 받은 값을 "정수"로 반환
console.log(
  parseInt(123),
  parseInt("123"),
  parseInt(" 123.4567 "),
  parseInt("345.6789") // 반올림 안 됨. 345로 반환
); // 위 3개 123으로 반환

// 6) encodeURI,encodeURIComponent
// 둘의 차이
// URI에서 특정 기능을 갖는 =, ?, & 등을 인코딩하는가의 여부
// encodeURI는 인자를 완성된 URI로, encodeURIComponent는 요소로 인식하기 때문
// 전체를 넘겨줄때 = encodeURI
// 특정 키워드만 넘겨줄때 = encodeURIComponent
// URI = 무조건 "아스키 문자" set으로만 구성 !
const searchURI = "https://www.google.com/search?q=얄코";
const encodedURI = encodeURI(searchURI);

console.log(encodedURI);
// 결과 : https://www.google.com/search?q=%EC%96%84%EC%BD%94
// q=얄코부분을 아스키 문자로 완전히 바꿈

const keyword = "얄코";
const encodedKeyword = encodeURIComponent(keyword);

console.log(encodedKeyword);
// URI에 들어갈 "부분"을 인코딩

// 7) decodeURI, decodeURIComponent
// encodeURI(Component)와 반대로 동작
