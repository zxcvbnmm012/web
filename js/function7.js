// function7.js

console.log(friends); // function6.js에 선언된 friends

/*
let friend = {
  name: "김민규",
  age: 20,
  phone: "010-1111-2222"
};
*/

// for .. in 문 -> 객체의 속성 수만큼 반복
// prop : friend 객체가 가지고 있는 속성을 나타내는 가변적 변수 -> friend 객체의 각 속성들이 prop 변수에 반복마다 할당됨
for ( let prop in friends){
  console.log(`prop: ${prop}, val: ${friends[prop]}`);
  // ${friend[prop]} : friend가 가진 prop(가변적)의 값
  // ${friend.prop} : 속성의 이름이 prop인 값을 찾음 -> 없다
}

/*
// for .. of 문 -> 배열의 크기만큼 반복
// friend : friends 배열이 가지고 있는 요소 -> friends 배열의 각 요소들이 friend 변수에 반복마다 할당됨
for ( let friend of friends){
  tlist += makeRow(friends);
}
  */

// 함수: makeRow(friend={}) -> friends 객체를 매개변수로 사용하는 함수
function makeRow(friend = {name, age, phone}){
  let str = "";
  str += "<tr>";
  for (let prop in friend){ // for .. in 문 사용
    str += `<td>${friend[prop]}</td>`;
  }
  /*
  for (let i = 0; i < friend.length; i++){
    str += `<td>${friend.name}</td><td>${friend.age}</td><td>${friend.phone}</td>`}
  */
  str += "</tr>";
  return str;
}

let tlist = "";
tlist += "<table class = 'table'>";
tlist += "<tbody>";

for ( let friend of friends ){ // for .. of 문 사용
  tlist += makeRow(friend);
/*
for(let i = 0; i < friends.length; i++){
  tlist += makeRow(friends[i]);
*/
}

tlist += "</tbody></table>";
document.write(tlist);



let titles = ["이름", "나이", "연락처"];
let tlist2 = "";
tlist2 += "<table class = 'table'><tbody>";
for ( let title of titles ){
  tlist2 += `<th>${title}</th>`;
  tlist2 += `<td>${titles[title]}</td>`;
};
tlist2 += "</tr></tbody></table>";
document.write(tlist2);