const array1 = [1, "ABC", true];
const array2 = array1;
console.log("array1:", array1);
console.log("array2", array2);
array2[0] = "김태기는";
array2[1] = "천재다";
array2[2] = false;

console.log("array1:", array1);
console.log("array2:", array2);

const obj1 = {
  num: 2,
  str: "혜윤",
  bool: true,
};

const obj2 = obj1;
obj2.num = 9;
console.log(obj1, obj2);

const array3 = [1, "ABC", true];
const array4 = array3;
array4[1] = "혜윤";
console.log(array3, array4);
