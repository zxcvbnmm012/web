// condition6exe.js

// 1. 두 수를 입력 -> 큰 값을 콘솔에 출력 -> "두 수 중에서 큰 값은 __입니다"
let num1 = prompt("첫번째 숫자를 입력하세요");
let num2 = prompt("두번째 숫자를 입력하세요");

if (num1 < num2){
  console.log("두 수 중에서 큰 값은 " + num2 + "입니다");
} else if(num1 > num2){
  console.log("두 수 중에서 큰 값은 " + num1 + "입니다");
} else{
  console.log("두 수는 "+ num1 + "로 같습니다");
}

// 2. 임의의 2개의 수(40~70)을 생성 -> 2개의 수중에서 큰 값은 __입니다
let num3 = 40 + Math.floor(Math.random() * 31);
console.log("첫번째 수는 " + num3 + "입니다");
let num4 = 40 + Math.floor(Math.random() * 31);
console.log("두번째 수는 " + num4 + "입니다");

if (num3 < num4){
  console.log("두 수 중에서 큰 값은 " + num4 + "입니다");
} else if(num3 > num4){
  console.log("두 수 중에서 큰 값은 " + num3 + "입니다");
} else{
  console.log("두 수는 "+ num3 + "로 같습니다");
}


// 3. condition3.js에 "A","B","C,"D","F" -> 95이상이면 A+
let result = 30 + Math.floor(Math.random() * 71);
console.log(result);

if (result >= 95) {
  console.log("A+");
} else if (result >= 90) {
  console.log("A");
} else if (result >= 85) {
  console.log("B+");
} else if (result >= 80) {
  console.log("B");
} else if (result >= 75) {
  console.log("C+");
} else if (result >= 70) {
  console.log("C");
} else if (result >= 65) {
  console.log("D+");
} else if (result >= 60) {
  console.log("D");
} else {
  console.log("F");
}
// 4. 반복문 (537p 연습)
let sum = 0;
  for (let i=1 ; i<6 ; i++){
    sum += i;
}
document.write('1부터 5까지 더하면 ' + sum);