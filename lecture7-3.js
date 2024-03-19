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
console.log(arr1);
