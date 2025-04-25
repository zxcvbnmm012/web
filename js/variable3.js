// variable3.js
// 연산자(+ : 더하기, - : 빼기, / : 나누기, * : 곱하기, % : 나머지)

let num1 = document.querySelector('#num1').value;  // querySelector는 document의 method
// 변수 num1에 #num1의 value값 30이 저장됨
let num2 = document.querySelector('#num2').value;
let result1 = num1 + num2; // string일때 ; '30' + '17' = '3017'
// #num1, #num2에 저장된 value값은 string type
let result2 = parseInt(num1) + parseInt(num2); // number일때 ; 30 + 17 = 17
// parseInt() : 문자열을 숫자로 변경해줌 

console.log(result1);
console.log(result2);

//result 값을 input#result의 value 속성에 대입
document.querySelector('#result').value = result2;

// 증감연산자
let a = 1;
let b = 2;
let c = a++ + b; // a++ : 연산 결과를 c에 대입 후 a를 1 증가시킴
console.log(c);
console.log(a);

let d = a + ++b; // ++b : b를 1 증가시킨 후 연산 결과를 d에 대입
console.log(d);
console.log(b);
console.log(a);