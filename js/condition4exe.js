// coondition4exe.js

// 1~10 임의의 값을 생성하고
// 생성값을 변수에 저장한 후 2의 배수 또는 3의 배수 판별

let num1 = 1 + Math.floor(Math.random()*10); // 1 <= x < 11
console.log(num1);

if (num1 % 2 == 0 && num1 % 3 == 0){
  console.log("2,3의 배수입니다");
} else if (num1 % 3 == 0){
  console.log("3의 배수입니다");
} else if (num1 % 2 == 0){
  console.log("2의 배수입니다");
} else {
  console.log("아무 배수도 아닙니다");
}
