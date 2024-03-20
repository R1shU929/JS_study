// 7-3 고차함수 메서드들
// 배열의 고차함수 메서드
// 다른 함수 (콜백 함수)를 인자로 받음
// 함수형 프로그래밍 - 변수 사용 없이 순회 작업들 코딩

// 1. forEach - 각 요소를 인자로 콜백함수 실행
// 콜백함수 - 인자 : ( 현재 값,현재 값의 인덱스,해당 배열 )
const arr = [6, 2, 3, 4, 5];

const result = arr.forEach((itm) => {
  console.log(itm);
});

// 2. map - 각 요소를 주어진 콜백함수로 처리한 새 배열 반환
const orgArr = [1, 2, 3, 4, 5];
const arr1 = orgArr.map((i) => i + 1);
console.log(arr1); // [2, 3, 4, 5, 6]

// 3. find, findLast, findIndex, findLastIndex - 주어진 기준으로 검색
// 콜백함수로에 인자로 넣었을 때 true를 반환하는
// find - 첫 번째 값 반환
// findLast - 마지막 값 반환
// findIndex - 첫 번째 값의 인덱스 반환
// findLastIndex - 마지막 값의 반환

const arr = [1, 2, "삼", 4, 5, 6, "칠", 8, 9];

const isString = (i) => typeof i === "string";
const isBoolean = (i) => typeof i === "boolean";

console.log(
  arr.find(isString), // 삼
  arr.findLast(isString), // 칠
  arr.findIndex(isString), // 2
  arr.findLastIndex(isString) // 6
);

// 4. some, every - 어떤/모든 요소가 기준을 충족하는지 확인
// 콜백함수에 인자로 넣은
// some - 요소들 중 하나라도 true를 반환하는가 여부 반환
// every - 모든 요소가 true를 반환하는가 여부 반환
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  arr.some((i) => i % 2),
  arr.every((i) => i % 2),
  arr.some((i) => i < 0),
  arr.every((i) => i < 10)
);
