// 10-3 이터러블
// 1. 이터러블 프로토콜
// 반복, 순회 기능 사용된 주체간의 통일된 규격

// 이터러블 - 이.프의 객체
// 배열, 문자열, set, map ..
console.log(
  [][Symbol.iterator](),
  ""[Symbol.iterator](),
  new Set()[Symbol.iterator](),
  new Map()[Symbol.iterator]()
);

// 2. 이터레이터 iterator
// next 메서드를 통해 이터러블을 순회하며 값을 반환
const arr = [1, "A", true, null, { x: 1, y: 2 }];
const arrIterator = arr[Symbol.iterator]();

// 펼쳐서 메서드 살펴볼 것
console.log(arrIterator);

arrIterator.next(); // ⭐ 반복 실행해 볼 것
// 반복 할때마다 새로운 값 (다음 값) 반환됨

// 3. 이터레이터 프로토콜 iterator protocol
// next 메서드의 반환 객체 내 요소

// value - 해당 차례에 반환할 값
// done - 순회 종료 여부 ( 마지막 값 반환 다음 차례부터 )
