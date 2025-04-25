// variable4.js
// 연산자(할당연산자)

let num1 = "10";
num1 = num1 + "20"; // 할당연산자는 오른쪽부터 처리 -> num1 = "1020"
num1 = num1 + "30"; // "102030"
console.log(num1);

num1 += "40"; // num1 = num1 + "40";
console.log(num1);

let num2 = 10; // number
num2 += 20; // num2 = num2 + 20 -> num2 = 30
num2 += 30; // num2 = 60
console.log(num2);

num2 = num2 - 5; // num2 = 55
num2 -= 5; // num2 = 50
console.log(num2);

num2 = num2 * 2; // num2 = 100
num2 *= 2; // num2 = 200
console.log(num2);

num2 = 10203040

// 비교연산자
console.log(num2 == num1); // 값만 비교 -> == 
// javascript는 string과 number 값이 같으면 같은 값이라고 봄
console.log(num2 === num1); // datatype까지 비교 -> ===

console.log(num2 != num1); // 값만 비교 -> !=
console.log(num2 !== num1); // datatype까지 비교 -> !==

// 논리연산자
console.log(num1 >= num2); // num1 = "10203040" / num2 = 10203040
console.log(num1 >= num2 || num1 < 100); // num1>=num2 이거나 num1<100인 경우 true 
// -> true || false -> true
console.log(num1 >= num2 && num1 < 100); // num1>=num2 이고 num1<100인 경우 true 
// -> true && false : false
console.log(num1 >= num2 && !(num1 < 100)); // num1>=num2 이고 !(num1<100)인 경우 true 
// -> true && true : true




