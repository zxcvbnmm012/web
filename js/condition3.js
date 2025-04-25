// condition3.js

let result1 = Math.random(); // (0 <= x < 1) 범위 안에서 random값 생성
console.log(result1);

let result2 = Math.random() * 10; // (0 <= x < 10) 범위 안에서 random값 생성
console.log(result2);

let result3 = Math.floor(Math.random() * 10);
// (0 <= x < 10) 범위 안에서 정수 random값 생성
console.log(result3);

let result4 = 30 + Math.floor(Math.random() * 71);
// (30 <= x < 101) 범위 안에서 정수 random값 생성
console.log(result4);

if (result4 >= 90) {
  console.log("A");
} else if (result4 >= 80) {
  console.log("B");
} else if (result4 >= 70) {
  console.log("C");
} else if (result4 >= 60) {
  console.log("D");
} else {
  console.log("F");
}

/* else if 사용하지 않고 if문 4개 만들기
if (result4 >= 90) {
  console.log("A");
}
if (result4 >= 80) {
  console.log("B");
}
if (result4 >= 70) {
  console.log("C");
}
if (result4 >= 60) {
  console.log("D");
} else {
  console.log("F");
}
*/