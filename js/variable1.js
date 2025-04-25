//variable1.js 파일 내부

// JS 주석문.
/*
주석문 : 486p ~ 489p 읽기.
*/
// 데이터베이스 관리 시스템(DBMS) - Oracle.
// 정보 -> frontend -> backend -> oracle.
// 변수(variable) - datatype(문자,숫자,boolean;true/false,object,배열).

// 변수선언 예약어 : let & const
// 출력함수 : log() & dic()

let name; //변수선언 -> 예약어 let으로 변수를 선언하면 변수값 변경 가능.
name = "김해민"; // 값을 대입. 
let name1 = "홍길동"; // 변수에 초기값 넣어주는 것 : 변수초기화. / 중복된 변수는 선언할 수 없음.
name = "김민수";
console.log(name); // consol에 log함수를 활용해 name이라 하는 변수를 출력.

const age = 20; // 변수 선언 & 초기화 -> const는 변수 값 변경 불가 / 변수 값을 바꾸고 싶으면 let 예약어를 사용해야함.

// 선택자(selector)
let item = document.querySelector('#userValue'); // id가 userValue인 값을 찾아와서 item변수에 저장 / querySelector() : 값을 찾을 때 사용하는 함수
console.log(item); // console.dic(item);
name = item.value; //item이라는 input 태그에 있는 value 값을 name이라는 변수에 할당
console.log(name);