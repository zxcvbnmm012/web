// while2.js

// 사용자에게 1~10까지 임의의 수를 입력
// 범위 밖의 값을 입력하면 종료
// 입력값의 누적합을 콘솔에 출력


let sum = 0;

while(true){
  let num1 = parseInt(prompt("1 ~ 10까지의 수를 입력하세요"));
  if (num1 > 10 || num1 < 1){
    break;
  }
  sum += num1;
}

console.log(sum);

/*
let sum = 0;
let num = 1;
while(num>=1 && num<=10){
  num = parseInt(prompt("1~10까지의 수를 입력하세요"))
  if (num>10){
    num = 0;
  }
  sum += num;
}
console.log(sum);
*/