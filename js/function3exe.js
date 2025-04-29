// function3exe.js

// 1. function max(10,7) -> "두 수중에서 큰 값은 10입니다"
function max(num1, num2){
  if (num1 > num2){
    console.log(`두 수중에서 큰 값은 ${num1} 입니다.`);
  } else if(num1 < num2){
    console.log(`두 수중에서 큰 값은 ${num2} 입니다.`);
  }
}

max(10,7); // 기능호출


// 2. function sumUpTo(5) -> "1부터 5까지의 합은 15입니다"
function sumUpTo(num){
  let sum = 0;
  for (let i = 1 ; i <= num ; i++){
    sum += i;
  }
  console.log(`1부터 ${num}까지의 합은 ${sum} 입니다.`);
}

sumUpTo(5);


//3. function diff(17, 34) -> "두 수의 차는 17입니다"
function diff(num1,num2){
  let result = 0;
  if (num1 < num2){
    result = (num2 - num1);
    console.log(`두 수의 차는 ${result} 입니다 `)
  } else if (num1 > num2){
    result = (num1 - num2);
    console.log(`두 수의 차는 ${result} 입니다 `)
  }
}

diff(17,34);