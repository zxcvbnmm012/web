// for3.js

// 1) 1~10의 값을 입력했을때만 sum 구하기
let sum = 0;

for (let i = 1; i <=5 ; i++){
  let str = prompt("1~10까지의 숫자를 입력하세요")
  let inputValue = parseInt(str); // "7" -> 7 : 문자 타입을 숫자 타입으로 변환
  if ( inputValue >= 1 && inputValue <=10 ){
    sum += inputValue; // inputValue가 1~10값일때만 sum에 합
  }
}

console.log(`누적합계: ${sum}입니다.`); // ` (백틱) : ${변수} -> 변수의 값 출력 가능
// console.log("누적합계:" + sum + "입니다");



// 2) 1~10의 값을 입력한 횟수로 avg 구하기
let sum1 = 0;
let avg = 0;
let count = 0;

for (let i = 1; i <= 5; i++){
  let str = prompt("1~10까지의 숫자를 입력하세요")
  let inputValue = parseInt(str); // "7" -> 7 : 문자 타입을 숫자 타입으로 변환
  if ( inputValue >= 1 && inputValue <=10 ){
    sum1+= inputValue; // inputValue가 1~10값일때만 sum에 합
    count++;
  }
}

avg = (sum1/count);
console.log(`누적합계: ${sum1}입니다. 평균은 ${avg}입니다`);
