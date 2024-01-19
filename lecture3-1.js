//3-1 블록문과 스코프
// 블록문 안의 변수는 블록 안에서만 접근 가능
// var로 선언 시, 밖에서도 접근 가능
const x = 0;
let y = "기리보이";
console.log(x, y);
{
  const x = 1;
  let y = "한요한";
  console.log(x, y);
}
console.log(x, y);

let a = 0;
let b = 1;
let c = 2;
console.log("시점 1:", a, b, c);

{
  let a = "A";
  let b = "B";
  console.log("시점 2:", a, b, c);

  {
    let a = "가";
    console.log("시점 3:", a, b, c);
  }

  console.log("시점 4:", a, b, c);
}

console.log("시점 5:", a, b, c);
