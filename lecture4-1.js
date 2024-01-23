// 4-1 함수
// 기본 문법
function 함수명(입력값) {
  return 반환값;
}
함수명(입력값);
// 1) 함수를 사용
// 1. 반복되는 작업 정의
function allArithemics(x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
  console.log(`${x} - ${y} = ${x - y}`);
  console.log(`${x} * ${y} = ${x * y}`);
  console.log(`${x} / ${y} = ${x / y}`);
}

let a = 3,
  b = 4;
allArithemics(a, b);

let c = 10,
  d = 2;
allArithemics(c, d);

let e = 7,
  f = 5;
allArithemics(e, f);
// 2.  input을 받아 output을 반환 return
function add(x, y) {
  return x + y; // ⭐️ 값을 반환
}

let z = add(2, 3);

console.log(z);
// 호이스팅
// 함수는 실행문보다 나중에 정의하는 것이 가능
// 변수나 상수는 불가능! (var 제외)
console.log(add(2, 7));

function add(x, y) {
  return x + y;
}
// 2) 함수 정의법
// 1. 함수 선언
function add(x, y) {
  return x + y;
}

console.log(add(2, 7));
//2. 상수나 변수에 함수 대입
const subt = function (x, y) {
  return x - y;
};

console.log(subt(7, 2));
//3. 화살표 함수
// 한 줄 안에 값만 반환시
const mult = (x, y) => x * y;

console.log(mult(2, 7));
// 2.3 번은 호이스팅 안됨

function cal(a, b, c) {
  return a + b + c;
}
console.log("cal" + cal(1, 1, 1));
