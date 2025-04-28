// function2.js


// 1) console에 별을 출력하는 함수 정의
function printStar(times = 3) { // times의 초기값 : times에 인수가 지정되지 않으면 3이라는 값으로 대체
  let str = '';
  for (let i = 1; i < times; i++){
    str += '⭐';
  }
  console.log(str);
} 
printStar();
// printStar(5); -> ⭐⭐⭐⭐


// 2) shape의 모양을 변경하여 출력 -> 초기값을 지정한 매개변수를 변경
function printStar(times = 1, shape = '⭐') {
  let str = '';
  for (let i = 1; i < times; i++){
    str += shape;
  }
  console.log(str);
} 
printStar(2, '💔');



// 3) sum 함수 정의
function sum(num1, num2){
  let result = 0;
  if(num2 == undefined){ // 인자가 1개만 들어왔을때 다른 인자를 만들어줌
    result = num1 + 0;
  }
  result = num1 + num2;
  return result; // (num1 + num2) 반환
}
console.log(sum(10,2));


// 3)함수에 인자가 하나만 들어왔을때 처리하는 방법
// M1) function에 if문을 추가하여 처리
function sum(num1, num2){
  let result = 0;
  if(num2 == undefined){ // 인자가 1개만 들어왔을때 다른 인자를 만들어줌
    result = num1 + 0;
  }
  result = num1 + num2;
  return result;
}
console.log(sum(10));

// M2) function의 매개변수에 초기값을 설정해서 처리
 function sum(num1 = 0, num2 = 0){
  let result = 0;
  result = num1 + num2;
  return result;
}
console.log(sum(10));


// 4) 구구단을 출력하는 함수
function printGugudan(dan = 2){
  for(let i = 1; i <= 9; i++){
      document.write(`<p>${dan} * ${i} = ${dan*i}</p>`);
    }
}
printGugudan(5);