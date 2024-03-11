// 7-1 자바스크립트 배열의 특징과 생성
// 1. 자바스크립트의 배열은 다르다
// 1) 다른 언어들의 배열
// 한 배열에는 "같은 자료형"의 데이터만 포함 가능
// 데이터의 메모리 주소가 "연속"으로 나열됨
// 접근은 빠름, 중간요소의 추가나 제거는 느림

// 2) 자바스크립트의 배열
// ⭐️ 배열의 형태와 동작을 흉내내는 특수 객체
// 한 배열에 "다양한" 자료형의 데이터가 들어갈 수 있음
// 연속나열이 아님
// 접근은 상대적으로 느림, 중간요소의 추가나 제거는 빠름

// 2. 배열 생성 방법들
// 1) 배열 리터럴
const arr1 = []; // 빈 배열
const arr2 = [1, 2, 3];
const arr3 = [1, , 2, , 3]; // 빈 요소(undefined) 표함 배열 생성

console.log(arr1.length, arr1); // 0,[]
console.log(arr2.length, arr2); // 3,[1,2,3]
console.log(arr3.length, arr3); // 5 [1, ,2, ,3]
// 2) 생성자 함수
const arr = new Array(3);

console.log(arr); // [ , , ]
console.log(arr.length); // 3

console.log(
  arr[0],
  arr[1],
  arr[2] // undefined undefined undefined
);
// 인자가 숫자 하나면 길이값은 있지만 요소가 없는 배열 생성

const arr1 = new Array(1, 2, 3);
const arr2 = new Array("ABC");
const arr3 = new Array(true);

console.log(arr1); // [1,2,3]
console.log(arr2); // ['ABC']
console.log(arr3); // [true]

// 3) 정적 메서드 of
// 인자가 하나의 숫자라도 이를 요소로 갖는 배열 생성
const arr1 = Array.of(3);

const arr2 = Array.of(1, 2, 3);
const arr3 = Array.of("ABC", true, null);

console.log(arr1); // [3]
console.log(arr2); // [1,2,3]
console.log(arr3); // ['ABC', true, null]

// 4) 정적 메서드 from
// 배열, 유사배열객체, 이터러블을 인자로 받아 배열 반환

const arr1 = Array.from([1, 2, 3]);
const arr2 = Array.from("ABCDE");
const arr3 = Array.from({
  0: true,
  1: false,
  2: null,
  length: 3,
});

console.log(arr1); // [1,2,3]
console.log(arr2); // ['A', 'B', 'C', 'D', 'E']
console.log(arr3); // [true, false, null]

// 💡 유사배열객체: length와 인덱싱 프로퍼티를 가진 객체

const arrLike = {
  0: "🍎",
  1: "🍌",
  2: "🥝",
  3: "🍒",
  4: "🫐",
  length: 5,
};

// 일반 for문으로 순회 가능
for (let i = 0; i < arrLike.length; i++) {
  console.log(arrLike[i]);
}
// for ... of 문은 이터러블에서만 사용 가능
for (const item of arrLike) {
  console.log(item);
}
// 배열은 이터러블, 성능도 향상
for (const item of Array.from(arrLike)) {
  console.log(item);
}
// 여기 윗 부분 이해 잘 안 됨

// ⚠️ Array.from은 얕은 복사 - 1단계 깊이만 복사

const arr1 = [1, 2, 3];
const arr2 = Array.from(arr1);
arr2.push(4);

console.log(arr1, arr2); // [1, 2, 3] , [1, 2, 3, 4]

arr1[0] = 0;

console.log(arr1, arr2); // [0, 2, 3] , [1, 2, 3, 4]

// ⭐️ 두 번째 인자: 매핑 함수
const arr1 = [1, 2, 3, 4, 5];
const arr2 = Array.from(arr1, (x) => x + 1);
const arr3 = Array.from(arr1, (x) => x * x);
const arr4 = Array.from(arr1, (x) => (x % 2 ? "홀" : "짝"));

console.log(arr2); // [2, 3, 4, 5, 6]
console.log(arr3); // [1, 4, 9, 16, 25]
console.log(arr4); // ['홀', '짝', '홀', '짝', '홀']
// 매핑 mapping : 각 요소가 특정 알고리즘을 거쳐 새 값으로 반환됨
