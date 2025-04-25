// condition1.js


let isTrue = true;
let num1 = 5;
let num2 = 10;

isTrue = 3 < 5;
isTrue = num1 < 5;
isTrue = --num1 < 5;
isTrue = --num1 <= 4 || num2++ == 10; //num1 = 3 || num2 = 10 
// -> true || true 이므로 조건2를 실행하지 않고 true 반환 -> num2++가 반영되지않음 
console.log(num2++);
console.log(num2);

isTrue = --num1 <= 4 && num2++ == 11; //num1 = 3 && num2 = 11
// -> true && true 이므로 조건1과 조건2를 모두 실행하고 true 반환 -> num2++ 반영
console.log(num2);

// true = (1, 값이 있는 것)
// false = (0, "", null, undefied, NaN)
isTrue = num2 % 2 ;
console.log(isTrue);

if (isTrue) {
  // isTrue의 참 => if 블럭 실행
  console.log("참");
} else{
  // isTrue의 거짓 => else 블럭 실행
  console.log("거짓");
}

