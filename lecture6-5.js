// 6-5 Math 객체
// = 수학에 관련된 기능을 가진 빌트인 객체
// 정적 프로퍼티와 메서드만 제공
// Number 타입만 지원 !

// 1. 주요 정적 프로퍼티
// 1) PI - 원주율
console.log(
    Math.PI // 3.141592653589793
  );

// 2) E - 자연로그의 밑
console.log(
  Math.E // 2.718281828459045
  );

// 2. 주요 정적 메서드
// 1) abs - 절대값(0 이상) 반환
console.log(
    Math.abs(123), // 123
    Math.abs(-123), // 123
  );

console.log(
    Math.abs(0), 
    Math.abs(''),
    Math.abs(null),
    Math.abs([]),
  ); // 모두 0 반환

console.log(
    Math.abs('abc'),
    Math.abs(undefined),
    Math.abs({a: 1}),
    Math.abs([1, 2, 3]),
    Math.abs()
  ); // 모두 NaN 반환

  const isEqual = (a, b) => {
    return Math.abs(a - b) < Number.EPSILON;
  }
  
  console.log(
    isEqual(0.1 + 0.2, 0.3) // true
  );

// 2) ceil 올림, round 반올림, floor 내림, trunc 정수부만
for (const num of [1.4, 1.6, -1.4, -1.6]) {
    console.log(
      num + ' : ',
      Math.ceil(num), // 1.4 :  2 1 1 1
      Math.round(num), // 1.6 :  2 2 1 1
      Math.floor(num), // -1.4 :  -1 -1 -2 -1
      Math.trunc(num), // -1.6 :  -1 -2 -2 -1
    );
  }

console.log(
    Math.ceil(),
    Math.round(),
    Math.floor(),
    Math.trunc()
  ); // 모두 NaN

// 3) pow - ~로 거듭제곱
console.log(
    Math.pow(4, 2), // 4 ** 2 = 16
    Math.pow(4, 1), // 4 ** 1 = 4
    Math.pow(4, 0), // 4 ** 0 = 1
    Math.pow(4, -1) // 4 ** -1 = 0.25
  );

// NaN 반환
console.log(
    Math.pow(4) // NaN
  );

// 4) sqrt - 제곱근
console.log(
    Math.sqrt(25), // 25 ** 0.5 = 5
    Math.sqrt(9), // 3
    Math.sqrt(2), // 1.4142135623730951
    Math.sqrt(1), // 1
    Math.sqrt(0) // 0
  );

console.log(
    Math.sqrt(-25),
    Math.sqrt()
  );
// 모두 NaN 반환

// 5) max, min - 인자들 중 최대값과 최소값
console.log(
    Math.max(8, 5, 9, 6, 3, 1, 4, 2, 7), // 9
    Math.min(8, 5, 9, 6, 3, 1, 4, 2, 7) // 1
  );

// 6) 6. random - 0~1 사이의 무작위 값
for (let i = 0; i < 10; i++) {
    console.log(Math.random());
  }

// 0 ~ 9 사이의 정수 무작위로 만들기
for (let i = 0; i < 10; i++) {
    console.log(
      Math.floor(Math.random() * 10)
    );
  }
// ⚠️ 안전한 (균일하고 예측불가한) 난수 생성은 아님!

// 7) sin, cos, tan, asin, acos, atan

console.log(
    // 1(또는 근사값) 반환
    Math.sin(Math.PI / 2), // 1
    Math.cos(Math.PI * 2), // 1 
    Math.tan(Math.PI / 180 * 45) // 0.9999999999999999
};

