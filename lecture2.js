//2-1
// typeof 연산자 - 뒤의 자료형 반환
// typeof 반환값 - string
const t = true,
  o = 123.45,
  c = "안녕하세요!";
console.log(t, typeof t);
// boolean
const a = 1 > 2;
const b = 1 < 2;

console.log(a, typeof a);
console.log(b, typeof b);
// 숫자
let integer = 100;
let real = 12.34;
let negative = -99;

console.log(integer, real, negative);
// 문자열
let first_name = "Brendan";
let last_name = "Eich";
let description = `미국의 프로그래머로
자바스크립트 언어를 만들었으며
모질라의 CEO와 CTO를 역임했다.`;

console.log(first_name, last_name);
console.log(description);
// undefined (값이 없음)
let x;
console.log(typeof x);
// null (의도적 빈 값)
let r = 1;
console.log("변경 전", r);

r = null;
console.log("변경 후", r);

let f = null;
console.log(typeof null, typeof f);
