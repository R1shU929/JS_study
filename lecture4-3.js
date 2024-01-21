// 4-3 매개변수
// 1. 기본 값 매개변수
function add(a = 2, b = 4) {
  console.log(`${a} + ${b}`);
  return a + b;
}

console.log(add(), add(1), add(1, 3));
// 2. argument - 함수 내 지역변수
// 아래 코드에서는
function add(a, b) {
  console.log("1.", arguments);
  console.log("2.", arguments[0]);
  console.log("3.", typeof arguments);
  return a + b;
}

console.log("4.", add(1, 3, 5, 7));
// 3. .. 변수 그룹명 - 나머지 변수
// 정해지지 않은 수를 받음
// 간단 퀴즈
function test(num1, cal, num2) {
  if (cal == "*") {
    return console.log(num1 * num2);
  }
  if (cal == "+") {
    return console.log(num1 + num2);
  }

  if (cal == "/") {
    return console.log(num1 / num2);
  }
  if (cal == "-") {
    return console.log(num1 - num2);
  }
}
console.log(test(1, "+", 3));
