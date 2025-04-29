// function5.js

let names = ['홍길동', '박춘식', '김민수', '이영식'];
let search = prompt("검색할 이름 입력: ");
let i = 0;
while(true){
  if (i == names.length){
    break;
  }
  if (search == names[i++]){
    exists = true; // 찾는 이름이 존재하면 true
    break;
  }
}
if (exists){
  alert("있음");
} else{
  alert("없음");
}

