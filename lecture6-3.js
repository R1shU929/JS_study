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

// 4) includes, startsWith, endsWith
// 인자로 주어진 문자열 포함 (아무곳에 / 맨 앞에 / 맨 끝에) 여부 불리언으로 반환
const sentence = "옛날에 호랑이 한 마리가 살았어요.";

for (const word of ["옛날에", "호랑이", "살았어요.", "나무꾼"]) {
  console.log("includes", word, sentence.includes(word)); // tttf
  console.log("startsWith", word, sentence.startsWith(word)); // tfff
  console.log("endsWith", word, sentence.endsWith(word)); // fftf
  console.log("- - - - -");
}

// 5) search
// 인자로 받은 🔗 정규표현식과 일치하는 첫 부분의 인덱스 반환
// 없을 시 -1 반환

console.log(
  "하루가 7번 지나면 1주일이 되는 거야.".search(/[0-9]/), // 4
  "하루가 일곱 번 지나면 일주일이 되는 거야.".search(/[0-9]/) // -1
);

// 6) substring
// 인자로 전달받은 인덱스(들)을 기준으로 자른 문자열 반환

const word = "ABCDEFGHIJKL";
const part = word.substring(4, 8); // 4부터 8까지

console.log(word, part); // ABCDEFGHIJKL EFGH
// 인자를 하나만 넣으면 해당 인덱스부터 끝까지
// 음수나 범위 외 숫자는 범위 내 최소/최대 숫자로

// 7) slice
// substring과 같으나 음수로 뒤에서부터 자를 수 있음

const word = "ABCDEFGHIJKL";
console.log(
  word.substring(-4), // ABCDEFGHIJKL
  word.slice(-4) // IJKL
);

// 8) split
// 인수로 주어진 문자열이나 정규표현식으로 분리하여 배열을 반환

console.log(
  "010-1234-5678".split("-"), // ['010', '1234', '5678']
  "ABC1DEF2GHI3JKL".split(/[0-9]/) // ['ABC', 'DEF', 'GHI', 'JKL']
);

// 인자로 빈 문자열을 넣거나 인자 생략시
const word = "안녕하세요";

console.log(
  word.split(""), //  ['안', '녕', '하', '세', '요']
  word.split() // ['안녕하세요']
);

const word = "하나 하면 할머니가 지팡이 짚고서 잘잘잘";

console.log(
  word.split(" ", 2), // ['하나', '하면']
  word.split(" ", 4) //  ['하나', '하면', '할머니가', '지팡이']
);
// 두 번째 인자로 배열의 최대 길이 지정 가능

// 9) trim, trimStart, trimEnd
// 앞뒤의 공백 제거하여 반환
// 단, 중간의 공백은 제거하지 않음
const word = "  Hello World!  ";
console.log(`--${word}--`); // --  Hello World!  --
console.log(`--${word.trim()}--`); // --Hello World!--
console.log(`--${word.trimStart()}--`); // --Hello World!  --
console.log(`--${word.trimEnd()}--`); // --  Hello World!--

// 10) repeat
// 인자로 주어진 정수만큼 문자열을 반복하여 반환

const word = "호이";
console.log(word.repeat(3)); // 호이 호이 호이
console.log(word.repeat(0));
console.log(word.repeat());
console.log(word.repeat(-1));
// 인수가 없거나 0이면 빈 문자열 반환, 음수면 오류 발생

// 11) replace, replaceAll
// 첫 번째 인자로 받은 문자열 또는 정규식을 두 번째 인자로 바꿔준 결과를 반환

console.log(
  "이스탄불은 터키의 수도이다.".replace("터키", "튀르키예") // 이스탄불은 튀르키예의 수도이다
);

const word = "밥 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!";

console.log(word.replace("밥", "라면")); // 라면 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!
// 해당하는 첫 번째 부분만 바꿈
console.log(word.replace(/밥/g, "라면")); // 라면 좀 먹자, 라면. 응? 야, 라면 좀 먹자고 라면, 라면!
// 해당하는 부분 모두 바꿈
// 모두 치환하려면 정규식 /.../g 사용

console.log(word.replaceAll("밥", "라면"));
console.log(word.replaceAll(/밥/g, "라면"));
// replaceAll은 /../g 을 사용하지 않아도 모두 바꿔줌

// ⭐️ 메서드 체이닝 method chaining
// 값을 반환하는 인스턴스 메서드를 연속으로 사용

const word = " 모두 HELLO! ";
const rpFrom = "hello";
const rpTo = "bye";

console.log(
  word
    .trimStart() // '모두 HELLO! '
    .toLowerCase() // '모두 hello! '
    .replaceAll(rpFrom, rpTo) // '모두 bye! '
    .toUpperCase() // '모두 BYE! '
    .repeat(3) // '모두 BYE! 모두 BYE! 모두 BYE! '
    .trimEnd() // '모두 BYE! 모두 BYE! 모두 BYE!'
);
