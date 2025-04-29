// function4.js
// 함수 + 반복문 + 배열:

let num = 10;
num = "10, 홍길동"; // 2개의 값이 아닌 하나의 문자열
let numAry = [10, 20]; // 배열 -> 객체 생성 방법 1) new Array() : 2) let 변수 = []
// 배열은 인덱스로 위치 지정
console.log(numAry[0]); // numAry의 0 위치에 있는 값
console.log(numAry[1]); // numAry의 1 위치에 있는 값
 // 배열의 인덱스 위치 활용해서 값을 추가
numAry[2] = 30;
console.log(numAry[2]); // numAry의 2 위치에 있는 값
numAry[3] = 50;
console.log(numAry[3]);
numAry[4] = "Hong"; // 배열에 문자 저장 가능
numAry[4] = 70; // 배열에 저장된 값 변경
numAry[5] = 90;
numAry[6] = 110;

console.log(`배열의 크기: ${numAry.length}`); // numAry의 크기 -> numAry의 length라는 속성을 불러온다

// 배열 + for 반복문
for (let i = 0; i < numAry.length ; i++){ // i는 배열의 크기만큼 반복
  console.log(`[i]의 값: ${i}, 배열의 값: ${numAry[i]}`);
}

// 연산가능
console.log(`numAry[6] - numAry[2] => ${numAry[6] - numAry[2]}`);

// 배열의 요소의 합
let sum = 0;
for(let i = 0; i < numAry.length ; i++){
  sum += numAry[i];
}
console.log(`sum => ${sum}`);

// 1,3,5,7번째 값만 합
let sum1 = 0;
for(let i = 0; i < numAry.length ; i++){
  if ( i % 2 == 0){
    sum1 += numAry[i];
  }
}
console.log(`sum => ${sum1}`);

// 배열요소의 값이 50보다 큰 값만 합
let sum2 = 0;
for(let i = 0; i < numAry.length ; i++){
  if ( numAry[i] > 50 ){
    sum2 += numAry[i];
  }
}
console.log(`sum => ${sum2}`);

// ages = [27, 28, 25, 30, 31, 36]
// 나이가 가장 많은 사람의 나이 출력
let ages = [27, 28, 25, 30, 31, 36];
let max = 0;
for (let i = 0; i < (ages.length - 1); i++){
  if (ages[i]>ages[i+1]){
    max = ages[i];
  } else if (ages[i]<ages[i+1]){
    max = ages[i+1];
  } 
  console.log(max);
}
console.log(`${max}이 제일 많은 나이입니다`);

// 교수님 코드
ages = [27, 28, 25, 30, 31, 36];
let max1 = 0;
for (let i = 0; i < ages.length; i++){
  if (max1 < ages[i]){
    max1 = ages[i];
  }
}
console.log(`${max1}이 제일 많은 나이입니다`);

// 함수 getMax()
function getMax(param1 = []){
  let max = 0;
  for (let i = 0; i < param1.length; i++){
    if (max < param1[i]){
      max = param1[i];
    }
  }
console.log(`${max}이 제일 많은 나이입니다`);
}

getMax(ages);
getMax([30, 17, 22, 34, 27]);

// 함수 getMinValue() : 매개값은 배열
// 배열 요소 중 가장 작은 값을 반환
function getMinValue(param2 = []){
  let min = param2[0];
  for (let i = 0; i < param2.length; i++){
    if (min > param2[i]){
      min = param2[i];
    }
  }
  return min;
}

let result = getMinValue([20, 27, 17, 30, 15]);
console.log(`결과는 ${result}`);
console.log(`결과는 ${getMinValue([1, 2, 3, 4])}`);
