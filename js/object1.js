// object1.js
// 객체지향(java) 함수기반(javascript) 


// 1) this => 1. 객체(객체를 가리킴)
let obj = {
  name: "홍길동", // 속성: 값
  age: 20,
  showName: function() {  // method 정의 방법 1) 기능 부여 -> 객체 안에 정의한 함수 : method
    console.log(this); // Object를 출력
    return `이름은 ${obj.name}입니다`; // obj 객체가 가지고 있는 하위 속성 name
    // return `나이는 ${this.age}입니다` // this : 객체 자기자신을 가리킴
  },
  setName(name){ // method 정의 방법 2)
    this.name = name;
  }
}
obj.setName("김길동");
let result = obj.showName();
console.log(result);


// 2) this => 2. 함수(window 객체 가리킴)
function sum1() {
  console.log(window); // window : 가장 상위 계층의 객체 -> 웹브라우저
  // window > document, alert ...
}
sum1();

function sum2() {
  console.log(this); // 함수 안에서 this가 사용되면 객체의 가장 상위 계층인 window를 가리킴
}
sum2();


// 3) class 생성 -> 구조에 대한 정의
class Person {
  // name, age: 속성
  // showName(). setName(): 메소드
  constructor(name, age) { // 생성자
    this.name = name;
    this.age = age;
  }
  // 메소드
  showName() { // 이름 출력
    return `이름은 ${this.name}입니다`;
  }
  setName(name) { // 이름 변경
    this.name = name;
  }
  showAge(){ // 나이 출력
    return `나이는 ${this.age}입니다`;
  }
  setAge(age){ // 나이 변경
    this.age = age;
  }
}
let choi = new Person("최민식", 22); // 인스턴스 생성 -> 구조에 대한 정의를 바탕으로 실체를 생성
// new Person("최민식", 22); -> class Person의 속성 name과 age에 "최민식", 22를 넣어준다
console.log(choi.showName());
choi.setName("최민수");
console.log(choi.showName());

let park = new Person("박충식", 30); // 인스턴스 생성
console.log(park.showName());
park.setAge(33);
console.log(park.showAge());