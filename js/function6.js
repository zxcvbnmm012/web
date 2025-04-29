// function6.js
// 배열 + object

// 객체 {속성: value, 속성: value ...}
// 객체 생성 방법 1) new Object(); 2) let 객체 = {};

let obj = { 
  name: "홍길동",
  age: 20,
  phone: "010-1111-2222",
  pets: [{
    name: "야옹이",
    age: 2,
    검진일: ['2025-01-04', '2025-04-03']
  },{
    name: "멍멍이",
    age: 3,
    검진일: ['2024-05-03']
  }]
}; 

console.log(obj.pets[0].name); // 객체.속성
console.log(obj.pets[0].검진일[0]);
console.log(obj.pets[1].name); //
console.log(obj.pets[1].검진일[0]);

// 객체의 속성들을 배열로 만들기
let friends = [
  {name: "홍길동", age: 20, phone: "010-1111-2222"},
  {name: "김민식", age: 21, phone: "010-3333-4444"},
  {name: "이영동", age: 22, phone: "010-5555-6666"}
];


for (let i = 0; i < friends.length; i++){
  if (friends[i].name == "홍길동"){
    console.log(friends[i].age);
  }
}

// 객체의 속성 age 중 가장 작은 값 찾기
let max = 0;
for (let i = 0; i < friends.length; i++){
  if (max < friends[i].age){
    max = friends[i].age;
  }
}
console.log(max);
