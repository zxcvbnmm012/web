// object.js
// indexOf()

let numArr = [10, 21, 33, 54, 16, 73];
let result = numArr.indexOf(33); // 찾으려는 수가 있으면 -> 인덱스 값을 반환
console.log(result);
let result1 = numArr.indexOf(3333);  // 찾으려는 수가 없으면 -> -1을 반환
console.log(result1);

let strAry = ["홍길동", "김길동", "홍길순"];
console.log("홍길동".indexOf("길")); // 문자열에도 사용 가능
strAry.forEach(function(item){
  if (item.indexOf("길동") != -1){ // 요소 중에 '길동'이 있다면
    console.log(item);
  }
  if (item.indexOf("홍") == 0){ // 요소 중에 '홍'이 있다면
    console.log(item);
  }
});


// numAry(변수) => 10 ~ 50 사이의 임의의 값을 10개 저장 => 콘솔에 출력(forEach)
let numAry = [];
for (let i = 0; i < 10; i++){
  numAry.push(10 + Math.floor(Math.random() * 41));
}
numAry.forEach(function(item){
  console.log(item);
});
console.log(numAry);


// 10 ~ 50 사이의 값이 정상적으로 생성되는지 체크 : every()
numAry.every(function(item){
  if (item >= 10 && item <= 50){
    console.log('맞습니다');
  }
})

/* 교수님 코드
result = numAry.every(function(item){
  return item >= 10 && item <= 50;
})
console.log(result); */

// result = numAry.every(item => item >= 10 && item <= 50); 