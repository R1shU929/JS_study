// 6-3 String 객체
// 1. 생성자 함수
// String으로 감싸기
const fromNum = new String(123);
const fromBool = new String(true);
const fromArr = new String([1, "A", false]);
const fromObj = new String({ a: 1 });

console.log(typeof fromNum, fromNum);
console.log(typeof fromBool, fromBool);
console.log(typeof fromArr, fromArr);
console.log(typeof fromObj, fromObj);

// toString으로 감싸기
console.log(fromNum.toString());
console.log(fromBool.toString());
console.log(fromArr.toString());
console.log(fromObj.toString());
// 둘 다 문자열로 변환

// new 없이 사용하기
const str1 = String("Hello World!");
const str2 = String(123);
const str3 = String(true);
const str4 = String({ x: 1, y: 2 });
const str5 = String([1, 2, 3]);

console.log(typeof str1, str1); // Hello World!
console.log(typeof str2, str2); // 123
console.log(typeof str3, str3); // true
console.log(typeof str4, str4); // 💡 [object Object]
console.log(typeof str5, str5); // 💡 1,2,3

// 2. 유사 배열 객체
let myStr = "안녕하세요!";

console.log(
  myStr.length, // 글자수인 6 반환
  myStr[0], // 안
  myStr[myStr.length - 1] //!
);

myStr[myStr.length - 1] = "?";
console.log(myStr); // 💡 배열과 달라 원래값이 변하지 않음
// 안녕하세요 !

// ⭐️ String은 원시값
// so, [] 접근이나 특정글자만 수정 못 함

// 3. 주요 인스턴스 메서드

// 1) toUpperCase, toLowerCase
// 대문자/소문자로 변경해서 반환
const word = "Hello, World.";
console.log(
  word.toUpperCase(), // HELLO, WORLD
  word.toLowerCase() // hello, world.
);
// 기존 문자열을 바꾸지는 않음

// 2) charAt, at
// 원하는 인덱스의 문자열 반환

// charAt
console.log(
  "Hello World!".charAt(0), // H
  "안녕하세요~".charAt(2) // 하
);

// at
// 신기능, 배열에서도 사용
// 음수로 뒤에서부터 접근 가능 ( -1 부터 )

console.log(
  "안녕하세요~".at(1), // 녕
  "안녕하세요~".at(-1) // ~
);

// 3) indexOf, lastIndexOf
// 인자로 주어진 문자열이 앞, 또는 뒤에서 처음 나타나는 인덱스 반환
// 포함되지 않을 시 -1 반환

const word = "반갑습니다!";
console.log(
  word.indexOf("습"), // 2
  word.lastIndexOf("습") //2
);
