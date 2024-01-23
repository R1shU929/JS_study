// 4-4 함수 더 알아보기
// 1. 중첩된 함수
function outer() {
  const name = "바깥쪽";
  console.log(name, "함수");

  function inner() {
    const name = "안쪽";
    console.log(name, "함수");
  }
  inner();
}

outer();
// 2. 재귀 함수
function upto5(x) {
  console.log(x);
  if (x < 5) {
    upto5(x + 1);
  } else {
    console.log("- - -");
  }
}

upto5(1);
upto5(3);
upto5(7);
// 3. 불변성
let x = 1;
let y = {
  name: "홍길동",
  age: 15,
};
let z = [1, 2, 3];

function changeValue(a, b, c) {
  a++;
  b.name = "전우치";
  b.age++;
  c[0]++;

  console.log(a, b, c);
}

changeValue(x, y, z);
// b와 c가 참조타입이기에 전우치로 변함
