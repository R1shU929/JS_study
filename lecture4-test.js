// 1번 문제
function big1(a, b) {
  return a > b ? a : b;
}

const big2 = function (a, b) {
  return a > b ? a : b;
};

const big3 = (a, b) => (a > b ? a : b);

// 2번 문제
function funcEach(func, array) {
  for (item of array) {
    func(item);
  }
}

// 3번 문제
function funcEach(func, ...items) {
  for (item of items) {
    func(item);
  }
}
// 4번 문제
function recursiveDecrease(num) {
  console.log(num);
  if (num > 0) recursiveDecrease(--num);
}
