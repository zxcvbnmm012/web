// condition5.js
//switch .. case 문
            // /*
            // let num1 = prompt("숫자를 입력하세요. ex: 1, 2, 3");

            // switch(num1){
            //   case "1": console.log("1을 선택했습니다");
            //     break; // switch문을 빠져나감
            //   case "2": console.log("2을 선택했습니다");
            //     break;
            //   case "3": console.log("3을 선택했습니다");
            //     break;
            //   default: console.log("1,2,3 중에 선택하세요");
            // }
            // */
// 30 ~ 100 임의의 값
let result = 30 + Math.floor(Math.random() * 71);
result = Math.floor(result/10); // 95/10 = 9.5 -> Math.floor(9.5) = 9
switch(result){
  case 10 :
  case 9 : console.log("A"); break;
  case 8 : console.log("B"); break;
  case 7 : console.log("C"); break;
  case 6 : console.log("D"); break;
  default : console.log("F");

}