// while1.js

// 1) 1 ~ 10 까지의 값 중에서 홀수 값만 콘솔에 출력 (for 구문)
for (let i = 1; i <= 10; i++){
  if (i % 2 == 1){
    console.log(i);
  }
}

console.log("end of prog.");


// 2) 1 ~ 10 까지의 값 중에서 홀수 값만 콘솔에 출력 (while 구문)
let num = 1;
while (true) {
  if (num % 2) { // num % 2 가 1이면 true, 0이면 false -> 홀수 출력
    console.log(num);
  }
  num++;
  if (num > 10){
    break; // num > 10이 true면 break.
  }
}

console.log("end of prog.");


// 3) 반복횟수에 상관없이 조건을 만족할 동안 반복
// 임의의 값 (0~100) 값을 생성하다가 30보다 작은 값이 나오면 break문 사용해서 종료
while(true){
  let a = Math.floor(Math.random() * 101);
  console.log(a);
  if (a < 30){
    break;
  }
}

console.log("end of prog.");


// 4) 반복횟수에 상관없이 조건을 만족할 동안 반복
// -> while 조건 안에 변수 사용 / break문 대신 (변수 = false) 사용해서 종료
let running = true;
while(running){
  let a = Math.floor(Math.random() * 101);
  console.log(a);
  if (a < 30){
    running = false; // while(running)은 running이 true일때만 반복
  }
}

console.log("end of prog.");