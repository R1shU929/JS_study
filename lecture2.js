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
//2-2
let job = "학생";
let age = 17;

console.log(job, age);
console.log(typeof age); // number으로 반환
//2-3
// \' 작은 따옴표
// \" 큰 따옴표
// \n 줄 바꿈
// \t 탭
// \\ 백슬래시
const NAME = "홍길동";
let age2 = 20;
let married = false;

console.log(
  `제 이름은 ${NAME}, 나이는 ${age2}세구요, \
${married ? "기혼" : "미혼"}입니다.`
);
