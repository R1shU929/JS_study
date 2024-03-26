// 10-1 set
// 중복되지 않는 값들의 집합
// 같은값 여러번 포함 불가

// 1. 기본 사용법
const set1 = new Set();
// add 메서드 - 요소 추가
set1.add(1);
set1.add("A");

console.log(set1); // set(2) {1,'A'}
// 이미 포함된 요소는 추가 안 함

// has 메서드 - 요소 포함여부 확인
console.log{
    set1.has(1), // true
    set1.has(2) // false
}; 

// delete 메서드 - 요소 제거 & 성공 여부 반환
console.log(
    set1.delete("A") // true set(1) {1}
)

// clear 메서드 - 모든 요소 삭제
set1.clear();
console.log(set1); // set1 {}

// 2. 이터러블로서의 set

// 1. for of 문 사용 가능
for (item of set) {
    console.log(item);
}

