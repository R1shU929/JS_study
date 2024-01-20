// 3-5 while 과 do while
// while - 조건이 참인 동안 반복수행

// 1 ~ 5 출력
let x = 0;
while (x < 14) {
  const xNow = x++;

  if (xNow % 2 === 0) continue;
  if (xNow > 7) break;

  console.log(xNow);
}
