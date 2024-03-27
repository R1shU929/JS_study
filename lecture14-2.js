// 14-2 프로미스
// 콜백 지옥
// 연속적으로 비동기 코드를 써야 하는 경우
// 위와 같이 콜백 함수 안에 또 다른 콜백 함수를 넣어야 하는 상황 발생 - 콜백 지옥
// 횟수가 많을수록 가독성도 낮아지고 직관성이 떨어짐

// 프로미스
// 어떤 과정 이후 주어진 동작을 실행할 것이란 약속
// 중첩된 비동기 코드를 직관적이고 연속적인 코드로 작성할 수 있도록 함

const borrow = 20;

// 빌린 돈의 10%를 더해 값겠다는 약속
// reject는 지금 사용하지 않음
const payWith10perc = new Promise((resolve, reject) => {
  resolve(borrow * 1.1); // -> 실행 결과
});

payWith10perc.then((result) => {
  console.log(result + "만원");
});

// 생성자 promise
// 새로운 약속하는 코드
// 인자로 받는 콜백함수의 첫 번째 인자 resolve - 약속 이행 성공시, 반환할 값 넣어 실행
// then 메서드
// resolve를 통해 ( 약속대로 ) 반환된 결과를 인자로 하는 콜백 함수를 넣음
// ⭐ 또 다른 프로미스를 반환 - 체이닝 가능
// 인자로 받는 콜백함수의 두 번째 인자 reject ( 이름은 관례 ) - 약속 이행 실패시, 반환할 값 넣어 실행
// reject가 실행되면 resolve는 무시됨
// catch 메서드 : reject를 통해 ( 실패로 인해 ) 반환된 결과를 인자로 하는 콜백 함수를 넣음
// finally 메서드 : 성공하든 실패하든 실행할 콜백 함수 - 필요할 때만 사용
// then과 더불어 메서드 체이닝으로 사용