// object2.js
// 배열내장객체 : new Array() 또는 []
// 관련 메소드 : push, pop, unshift, shift => forEach


let arr1 = [10, 20, 30];
// let arr1 = new Array(); // 배열 []
arr1[3] = 40;

// 배열의 method 종류
arr1.push(50); // 배열의 가장 뒤에 값을 추가

arr1.unshift(60); // 배열의 가장 앞에 값을 추가

arr1.pop(); // 배열의 마지막 요소를 삭제
arr1.pop();

arr1.shift(); // 배열의 첫번째 요소 삭제 

arr1.splice(1, 1, 15); // (위치지정,몇개의 값을,대체할 값) 
// splice() : 추가, 삭제, 수정
// -> splice(1, 1); 대체할 값을 지정하지 않으면 지정한 위치의 값이 삭제된다
arr1.splice(1, 0, 15, 16, 17);

arr1.forEach(function (item, idx, ary) { // forEach 메서드에는 매개변수로 함수를 받음
  // forEach(function()) : 주어진 함수를 배열의 크기만큼 실행 / 배열의 각 요소를 순회
  // -> 배열의 각 요소에 대해 주어진 콜백함수를 적용해 순서대로 한 번씩 실행
  // function() : 익명함수
  // function(item, idx, ary) 함수의 매개변수의 역할 
  // -> 첫번째변수 item : 처리할 현재 요소 / 두번째변수 : 인덱스 / 세번째변수 : 배열자체
  console.log(item, idx, ary)
});


arr1.every(function(item){ // every(function(item, idx, ary))
  // every : 모든 요소가 조건을 만족해야 실행
  return item % 2 == 1;
});
console.log(result);

ary1.some(function(item){
  // some : 하나의 요소라도 조건을 만족하면 실행
  return item % 2 == 1;
})

/* => : 화살표 함수
ary1.some(item => item % 2 == 1);
*/

console.log(arr1);