// object5.js
// Date 객체 : 날짜, 시간


let now = new Date();
// let now = new Date(0) -> Date 객체의 시작점 : 1970/01/01 09:00:00
// let now = now Date(1000) -> 1초 뒤 : 1070/01/01 09:00:01

console.log(now); // 현재 날짜, 시간 출력

console.log(now.getFullYear()); // 년도 출력
// now = new Date("01/01/2025"); // 시점 변경
// now = new Date("2025-01-01")
console.log(now.getMonth()); // 달 출력 -> 1월 : 0 / 2월 : 1 / 3월 : 2 / 4월 : 3 ...
console.log(now.getDay()); // 요일 출력 -> 일요일 : 0 / 월요일 : 1 / 화요일 : 2 / 수요일 : 3 ...
console.log(getKorDay(now.getDay())); // now.getDay()가 반환하는 값을 getKorDay()의 매개값으로 사용해서 함수 실행
now.setDate(20); // 현재 날짜를 새로 세팅해줌
console.log(now);
console.log(getKorDay(now.getDay())); // now.getDay()가 반환하는 값을 getKorDay()의 매개값으로 사용해서 함수 실행


function getKorDay(day = 1){
  switch(day) {
    case 0: return "일요일"; // return은 함수의 종료를 의미하므로 break 필요없음
    case 1: return "월요일";
    case 2: return "화요일";
    case 3: return "수요일";
    case 4: return "목요일";
    case 5: return "금요일";
    case 6: return "토요일";

  }
}