// 5-6 객체의 스프레드와 디스트럭쳐링
// 1. 스프레드
// 일종의 복사 개념

// 기본문법
const class1 = {
  x: 1,
  y: "A",
  z: true,
};

const class4 = { ...class1 };
// 이렇게 class1에 있는 코드가 class2로 복사됨
console.log(class2);
// 특정 프로퍼티 포함하게 만들 때 유용
// class2꺼를 class3에 넣기만 하면 새롭게 제작 끝!
const class2 = {
  a: 1,
  b: "A",
  c: true,
};
const class3 = {
  ...class2,
  z: 0,
};
// 출력 시, a: 1, b: "A", c: true, z: 0 로 나옴

// 중복되는 프로퍼티는 맨 마지막꺼가 출력됨
const class5 = {
  ...{ a: 1, b: 2 },
  ...{ b: 3, c: 4, d: 5 },
  ...{ c: 6, d: 7, e: 8 },
};

console.log(class5);
// 복사의 깊이
// 원시값만 복제하는 얕은 복사
// 참조값은 변하지 않음

// 2. 디스트럭쳐링
// 구조 -> 비구조화 시켜 개별 변수에 할당
// 객체나 배열에서 필요한 값만 추출해 변수에 할당, 반황시 유용
// 1) 문법
// 기존 코드
const obj1 = {
  x: 1,
  y: 2,
  z: 3,
};

const x = obj1.x;
const y = obj1.y;
const z = obj1.z;

console.log(x, y, z);
// 디스트럭쳐링으로 간략화
const obj1 = {
  x: 1,
  y: 2,
  z: 3,
};

const { x, y, z } = obj1;

console.log(x, y, z);
// 일부만 가져올 수도 있음 ㄷ ㄷ
const obj1 = {
  x: 1,
  y: 2,
  z: 3,
};

const { x, z } = obj1;

console.log(x, z);

// 2) 활용
// length라는 상수를 가져와서 저장하겠다!
const array1 = [1, 2, 3, 4, 5];

// const length = array1.length;
const { length } = array1;

console.log(length);
