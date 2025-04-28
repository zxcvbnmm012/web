// function1.js


// 함수의 정의
// 1) 2개의 수를 더하고 큰 값에 10을 더하고 작은 값에 5를 더한 후 합을 구하는 기능
function sum(parameter1, parameter2) { // parameter : 매개변수
  let result = 0;
  if (parameter1 > parameter2){
    result = (parameter1 + 10) + (parameter2 + 5); 
  } else {
    result = (parameter2 + 10) + (parameter1 + 5); 
  }
  return result; // return : 함수를 호출한 영역으로 결과를 반환
  // -> return 구문이 없으면 함수의 결과값을 반환해주지 않아 함수 호출시 result값을 사용할 수 없음
}




let num1 = 4, num2 = 2;
let result = sum(num1, num2);
document.write(`결과값 ${result}`);
// document 영역에 result 출력

num1 = 5, num2 = 3;
result = sum(num1,num2);
console.log(`결과값 ${result}`);
// console에 result 출력

result = sum(20, 19);
document.querySelector('#result').value = result;
// index.html에 정의된 result를 찾아 value에 result값을 넣어줌
// -> document의 result 영역에 result 출력

num1 = 1, num2 = 2;
result = sum(num1, num2);
alert(`결과값 ${result}`);
// alert : 경고창에 result 출력
