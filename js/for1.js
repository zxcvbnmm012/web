// for1.js 

let sum = 0;

for (let i = 1; i <= 5; i++) { // i의 초깃값; 조건; 증가식
  sum += i; // sum = sum + i -> i값 1증가
}

console.log('sum의 값은' + sum);

// 1 ~ 20 반복 => 짝수인 경우 합을 구하고 싶음

let sum1 = 0; // sum = 0; sum을 0으로 초기화하고 아래 for문에서 변수로 사용해도 됨

for (let i = 1; i <= 20; i++){
  if (i % 2 == 0){ // 조건 : 짝수일 때만 합한다
    sum1 += i;
  } // end of if.
  console.log(sum1, i);
} // end of for.

console.log('sum의 값은' + sum1)