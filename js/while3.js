// while3.js

// 화면요소를 삭제하는 함수

function removeElement(parameter1){
  console.dir(parameter1.target.parentElement.parentElement);
  // console.dir() : 객체의 속성을 console에 출력 -> parameter1의 속성을 확인
  // parameter1.target : button -> 이벤트가 일어날 객체
  // parameter1.target.parentElement : td
  // parameter1.targer.parentElemetn.parentElement : tr
  // -> button 태그의 상위요소들을 이용해서 저장된 <tr><td>userValue</td></tr> 제거.
  parameter1.target.parentElement.parentElement.remove(); // 제거
}


// 친구이름을 입력 => quit 종료

// 1) class로 table 스타일 지정
/*
let str = "";
str += "<table class = 'table table-striped'>";
str += "<tbody>";
str += "<th>친구이름</th>";
while(true){
  let name1 = prompt("친구 이름을 입력하세요");
  if (name1 == "quit"){
    break;
  }
  str += "<tr>";
  str += `<td>${name1}</td>`;
  str += "</tr>";
}
str += "</tbody>";
str += "</table>";
document.write(str);
*/


// 2) border로 table 스타일 지정
/*
let str = "";
str += "<table border = '1'>";
str += "<tbody>";

while(true){
  let name1 = prompt("친구 이름을 입력하세요");
  if (name1 == "quit"){
    break;
  }
  str += "<tr>";
  str += `<td>${name1}</td>`;
  str += "</tr>";
}
str += "</tbody>";
str += "</table>";
document.write(str);
*/


// 3) 교수님 code
let str = "";
str += "<table class = 'table'>";
str += "<tbody>";
let running = true;
while(running){
  let userValue = prompt("친구이름을 입력하세요.");
  if (userValue == "quit"){
    running = false;
    continue;
  }
  str += `<tr><td>${userValue}</td>
  <td><button onclick="removeElement(event)" class='btn btn-danger'>삭제</button></td>
  </tr>`;
  // event type : onclick Event -> 사용자가 요소를 클릭할 때 발생하는 이벤트
  // button 태그에 onclick event가 발생하면 그 이벤트를 객체로 받은 removeElement 함수 호출
}
str += `</tbody></table>`;
 document.write(str);
