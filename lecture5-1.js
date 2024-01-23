// 5-1. 객체의 기본 사용법
const food1 = {
  name: "햄버거",
  price: 5000,
  vegan: false,
};

// 프로퍼티 접근법 두 가지 !
console.log(
  food1.name, // 💡 마침표 프로퍼티 접근 연산자
  food1["price"] // 💡 대괄호 프로퍼티 접근 연산자
);

// 빈 객체 생성
const food2 = {};
console.log(food2);

// 변수명으로 사용 할 수 없는 이름의 키
const obj = {
  1: "하나", // 숫자도 객체의 키로는 사용 가능
  "ab-cd": "ABCD", // 문자 포함 시 키도 따옴표로 감싸야 함
  "s p a c e": "Space",
};

// 대괄호 프로퍼티 접근 연산자로만 가능 !!
console.log(obj[1], obj["ab-cd"], obj["s p a c e"]);

// ⚠️ 오류 발생 -> 마침표 프로퍼티 접근 불가 !
// console.log(
//   obj.1,
//   obj.ab-cd,
//   obj.s p a c e
// );

// 표현식으로 키 값 정의하기
// 대괄호 [] 사용 !
let idx = 0;
const abj = {
  ["key-" + ++idx]: `value-${idx}`,
  ["key-" + ++idx]: `value-${idx}`,
  ["key-" + ++idx]: `value-${idx}`,
  [idx ** idx]: "POWER",
};

console.log(abj);

// 객체나 배열을 키값으로 사용 ?
const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];

const obj1 = {
  [objKey]: "객체를 키값으로",
  [arrKey]: "배열을 키값으로",
};
console.log(obj1[objKey], obj1[arrKey]);
// -> 객체를 키값으로 배열을 키값으로
// 실제로 해당 객체나 배열의 내용이나 참조값이 키가 되는 것이 아님
const person1 = {
  name: "홍길동",
  age: 24,
  school: "한국대",
  major: "컴퓨터공학",
};

delete person1.age;
console.log(person1);
// 3. 키의 동적 사용
const product1 = {
  name: "노트북",
  color: "gray",
  price: 800000,
};

function addModifyProperty(obj, key, value) {
  // obj.key = value; // ⚠️ 의도와 다른 작업 수행
  obj[key] = value;
}
function deleteProperty(obj, key) {
  // delete obj.key // ⚠️ 의도와 다른 작업 수행
  delete obj[key];
}
addModifyProperty(product1, "inch", 16);
console.log(product1);
// 결과 : inch 추가
addModifyProperty(product1, "price", 750000);
console.log(product1);

// 4. Es6 추가 문법
// 1) 객체 선언 시, 프로퍼티 키 = 대입할 상수/변수명이면 단축해 표현
const x = 1,
  y = 2;

const obj3 = {
  x: x,
  y: y,
};

console.log(obj3);
// 위 코드를 밑 처럼
const obj2 = { x, y };

console.log(obj2);

// 2. 메서드 - 객체에 축약표현으로 정의된 함수 프퍼
// 일반 함수 프로퍼티 정의
const person = {
  name: "홍길동",

  salutate: function (formal) {
    return formal
      ? `안녕하십니까, ${this.name}입니다.`
      : `안녕하세요, ${this.name}이에요.`;
  },
};
console.log(person.salutate(true));
// 위 코드를
// ⭐️ 메서드 정의

//  salutate (formal) {
//   return formal
//   ? `안녕하십니까, ${this.name}입니다.`
// : `안녕하세요, ${this.name}이에요.`;
//  }
