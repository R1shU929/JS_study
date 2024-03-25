// 8-1 object 클래스
// 1. 생성자 함수
// 빈객체 생성
console.log(new Object(), new Object(null), new Object(undefined)); // []
// 적합한 래핑함수로 작용
console.log(new Object(1)); // prototype : Number
// 2. 주요 정적 메서드
// 1) assign - 인자로 주어진 객체의 프로퍼티를 대상 객체에 붙여넣기
// = 대상 객체 변경 (얕은복사)
const intro1 = {
  name: "홍길동",
};
const intro2 = { ...intro1 };

console.log(intro1, intro2); // {name:'홍길동'}

const personal = {
  age: 25,
  married: false,
};

Object.assign(intro1, personal);
console.log(intro1); // { name:'홍길동', age : 25 , married : false }

// 2) keys,values,entries - 객체의 키/값/[키,값]을 배열로 반환
const obj = {
  x: 1,
  y: 2,
  z: 3,
};

console.log(Object.keys(obj)); // ['x','y','z']

console.log(Object.values(obj)); // [1,2,3]

console.log(Object.entries(obj)); // 0: ['x', 1 ] , 1: ['y', 2 ], 2: ['z', 3 ]

// 3) preventExtensions - 프로퍼티 추가 금지
// isExtensible - 해당여부확인
Object.preventExtensions(obj);

console.log(object.isExtensible(obj)); // false

obj.x++; // 프로퍼티 수정 가능
delete obj.y; // 프로퍼티 삭제 가능
obj.z = 3; // 프로퍼티 추가 금지

console.log(obj); // {x : 2} -> 새 프로퍼티 추가 안 돼서 z 추가 안됨

// 4) seal - 프로퍼티 추가와 삭제 금지
// isSealed - 해당 여부 확인

Object.seal(obj);

console.log(object.isSealed(obj)); // true

obj.x++; // 프로퍼티 수정 가능
delete obj.y; // 프로퍼티 삭제 금지
obj.z = 3; // 프로퍼티 추가 금지

console.log(obj); // {x : 2, y: 2}

// 5) freeze - 객체 동결 - 읽기만 가능
Object.seal(obj);

console.log(object.isSealed(obj)); // true

obj.x++; // 프로퍼티 수정 불가
delete obj.y; // 프로퍼티 삭제 금지
obj.z = 3; // 프로퍼티 추가 금지

console.log(obj); // {x : 1, y: 2}
