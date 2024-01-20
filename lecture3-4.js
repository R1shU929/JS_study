// 3-4 for 루프
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
for (let x = true, y = 0, z = 0; y * z < 10; x = !x, x ? y++ : z++) {
  console.log(y, z);
}
// 객체 : for (키 이름 in 객체명) - 객체들의 키를 순서대로 반환
const lunch = {
  name: "라면",
  taste: "매운맛",
  kilocalories: 500,
  cold: false,
};

for (const key in lunch) {
  // 💡 변할 것이 아니므로 const 사용
  console.log(key, ":", lunch[key]);
}
// 배열: for (항목 of 배열명) - 배열의 항목들을 순서대로 반환
const list = [1, "가나다", false, null];

for (const item of list) {
  console.log(item);
}
// continue - 한 루프를 건너뜀
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

console.log("for 루프 종료");
//break - 블록을 종료하고 빠져나옴
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

console.log("for 루프 종료");
// label - 중첩된 반복문을 명명하여 continue 또는 break에 사용
