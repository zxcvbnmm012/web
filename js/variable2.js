// variable2.js

let num1 = 100;
num1 = "hundred"; // javascript에는 변수를 number type로 선언해도 string type으로 바꿀 수 있음 -> java는 불가
console.log(typeof num1); // log(typeof 변수) : 변수의 data type을 보여줌 / typeof는 연산자

let num_2 = 200;
let nameOfFriend = "홍길동"; // string type

// 변수 규칙 : 영어 소문자, 어떤 값을 나타내는지를 변수 이름에 표현

let birthOfDate = new Date(); // object type
console.log(typeof birthOfDate);

let isOK = true; // boolean type -> true / false
isOK = 10 < 5;
console.log(typeof isOK);
console.log(isOK);

if (isOK) {
  console.log('isOK는 참이다');
} // 만약 isOK가 true라면 { }를 실행하라

// 배열 [ ] : 여러개의 값을 담을 수 있는 구조
// [100, 200, 300, 400]
let numAry = [10, 20, 30, 40, 50]; // index : numAry[0] ~ numAry[4]
// numAry = [numAry[0], numAry[1], numAry[2], numAry[3], numAry[4]]
console.log(numAry);
console.log(numAry[0]);

let strAry = ["Hello", "Nice", "Good", 1, 2, 3];
// javascript는 배열에 string type과 number type을 함께 넣을 수 있음 -> 쓰지 않는 것이 좋음
console.log(strAry);
console.log(typeof strAry[3]);
console.log(typeof strAry[0]);

// 객체 { } : {키: 값}의 형태
let person = {
  name: "홍길동",
  age: 20,
  height: 168.9,
  weight: 65.3,
  peronInfo: function() {
    console.log('이름은 ' + person.name + '이고 나이는 ' + person.age); // ' ' + ' ' : 문자열 연결
  } // 객체 person에 personInfo라는 함수를 속성으로 추가 -> 객체 안에 포함된 함수 : method
};
person.peronInfo(); // personInfo라는 함수를 실행하겠다 -> method 호출(call)
console.log(person.name); // object type의 value 출력 -> 객체변수.키

// undefined & null
let whatIsThis; // 변수를 선언만 한 상태 : undefined
whatIsThis = document.querySelector("#userValue"); // document :화면에 보여지는 영역
// whatIsThis에 document 영역에서 #userValue의 값을 찾아 넣어라
console.log(typeof whatIsThis);
// querySelector는 object로 처리
console.log(whatIsThis);
