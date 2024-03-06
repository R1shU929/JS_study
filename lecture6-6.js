// 6-6 Date 객체
// = 날짜와 시간 관련 기능들을 제공하는 빌트인 객체

// 1. 생성자 함수
// 1) 현재 날짜와 시간

const now = new Date();

console.log(typeof now); // cbject
console.log(now); // Wed Mar 06 2024 15:17:44 GMT+0900 (한국 표준시)

const nowStr = Date();

console.log(typeof nowStr); // string
console.log(nowStr); // Wed Mar 06 2024 15:18:42 GMT+0900 (한국 표준시)
// new와 함께 사용하면 인스턴스 객체
// 없이 사용하면 문자열 반환 - new Date().toString()과 같음

// 2) 밀리초 기준
// 1970년 1월 1일 자정(UTC, 그리니치 평균시)으로부터 인자로 주어진 밀리초만큼 경과한 시간

console.log(new Date(0)); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)
console.log(new Date(1000 * 60 * 60 * 24 * 365 * 30)); // Sat Dec 25 1999 09:00:00 GMT+0900 (한국 표준시)

// 3) 단위별 숫자 입력
// 연, 월 ( 0부터 시작 ) 필수
// 일, 시, 분, 초, 밀리초 옵션 (없을 시 0)

console.log(
  new Date(2022, 8) // Thu Sep 01 2022 00:00:00 GMT+0900 (한국 표준시)
);

// 4) dateString
// 특정 형식의 문자열 인식 가능
// ⚠️ 동작이 일관적이지 못함, 브라우저마다 차이 존재 - 권장하지 않음

console.log(
  new Date("August 20, 2022 14:35:47") // Sat Aug 20 2022 14:35:47 GMT+0900 (한국 표준시)
);

console.log(
  new Date("2022-08-20T14:35:47") // Sat Aug 20 2022 14:35:47 GMT+0900 (한국 표준시)
);

// 2. 정적 메서드
// 1) now
// 현재의 밀리초 숫자값 (앞으로 UTC 1970/1/1 자정부터 경과값 의미) 반환

console.log(Date.now()); // 1709706281545

// 2) parse, UTC
// 주어진 시간의 밀리초 숫자값 반환
// parse는 dateString, UTC는 단위별 숫자를 받음

console.log(
  Date.parse("August 20, 2022 00:00:00 UTC") // 1660953600000
);

console.log(
  // 💡 시스템(실행 컴퓨터) 시간이 한국이면 시차 9시간 적용
  Date.parse("August 20, 2022 09:00:00") // 1660953600000
);

console.log(
  // ⭐️ 월은 0부터 시작
  Date.UTC(2022, 7, 20, 0, 0, 0) // 1660953600000
);

// 3. 인스턴스 메서드
// 1) toString, toDateString, toTimeString
// 각각 전체, 날짜만, 시간만 나타내는 문자열 출력
// 시스템(컴퓨터)의 언어 설정별로 다르게 나타남

// tostring = 전체 출력
const now = new Date();

console.log(
  now.toString() // Wed Mar 06 2024 15:28:12 GMT+0900 (한국 표준시)
);

// toDateString = 날짜만 출력
console.log(
  now.toDateString() // Wed Mar 06 2024
);

// toTimeString = 시간만 출력
console.log(
  now.toTimeString() // 15:28:12 GMT+0900 (한국 표준시)
);

// 2) toLocaleString
// 주어진 언어 코드를 기준으로 표현한 문자열 반환
// 인자가 없을 시 시스템의 언어 적용

const now = new Date();

console.log(
  now.toString() // Wed Mar 06 2024 15:36:47 GMT+0900 (한국 표준시)
);

console.log(
  now.toLocaleString() // 2024. 3. 6. 오후 3:36:47
);
// = 인자를 넣지 않았기에, 시스템 언어인 '한국' 시간 출력

console.log(
  now.toLocaleString("en-US") // 3/6/2024, 3:36:47 PM
);
// 미국 시간 출력 (미국표기법)

// 3) 단위별 setter, getter 메서드들
const now = new Date();
console.log(now.toString()); // Wed Mar 06 2024 15:39:47 GMT+0900 (한국 표준시)

for (i of [
  ["연:", now.getFullYear()],
  ["월:", now.getMonth()], // 0 ~ 11
  ["일:", now.getDate()],
  ["요일:", now.getDay()], // 0부터 일월화수목금토
  ["시:", now.getHours()],
  ["분:", now.getMinutes()],
  ["초:", now.getSeconds()],
  ["밀리초:", now.getMilliseconds()],
]) {
  console.log(i[0], i[1]);
}

now.setFullYear(2022);
now.setMonth(7);
now.setDate(20);
// 💡 요일은 setter가 없음
now.setHours(14);
now.setMinutes(35);
now.setSeconds(47);
now.setMilliseconds(789);

console.log(now.toString()); // Sat Aug 20 2022 14:35:47 GMT+0900 (한국 표준시)

// 4. getTime, setTime
// 밀리초 숫자값을 set/get

const date1 = new Date(2020, 7, 20);
const date1value = date1.getTime();

console.log(date1.toString()); // Thu Aug 20 2020 00:00:00 GMT+0900 (한국 표준시
console.log(date1value); // 1597849200000

const date2 = new Date();

console.log(date2.toString()); // Wed Mar 06 2024 15:43:00 GMT+0900 (한국 표준시)

date2.setTime(date1value);

console.log(date2.toString()); // Thu Aug 20 2020 00:00:00 GMT+0900 (한국 표준시)

// 5) getTimezoneOffset
// 시스템의 시간대와 UTC의 시간차를 분 단위로 반환
// 한국의 경우 9시간 차이

console.log(new Date().getTimezoneOffset() / 60); // -9

// 6) toISOString
// ISO 8061이란 형식의 문자열 반환
// UTC 기준으로 반환

const now = new Date();

// 시간차 존재
console.log(
  now.toISOString() // 2024-03-06T06:55:33.253Z
);
console.log(
  now.toString() // Wed Mar 06 2024 15:55:33 GMT+0900 (한국 표준시)
);
