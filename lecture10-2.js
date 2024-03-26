// 10-2 map
// 키와 값의 쌍으로 이루어짐
// 키, 값
// 키와 값을 잦주 변경할때 유용 !
// 객체나 배열의 참조값을 키로 사용 가능

// 1. 기본 사용법
const map1 = new Map();

map1.set("x", 1);
// set
// 중복 불가 ! 해당 키 있음 덮어쓰기
map2.set("x", 2);
console.log(map2); // x -> 2 / 1을 2로 덮어씀

// has 메서드 - 요소 포함여부 확인
console.log(
  map1.has("x"), // true
  map1.has("y") // false
);

// get 메서드 - 값 접근
console.log(
  map1.get("x") // 2
);

// 참조값도 키로 사용 가능
// delete 메서드 - 요소 제거 & 성공여부반환
console.log(
  map1.delete("x") // true map(0)
);

console.log(map1);
// keys,values,entries 메서드
// clear 메서드

// 이터레이터로서의 map
const arr = [
  ["🐶", "강아지"],
  ["🐱", "고양이"],
  ["🐯", "호랑이"],
  ["🐵", "원숭이"],
  ["🐨", "코알라"],
];
const map = new Map(arr);

// for..of 문
for ([key, value] of map) {
  console.log(key, value);
}
// 스프레드, 디스트럭쳐링 가능
