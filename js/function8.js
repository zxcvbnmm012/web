// function8.js

// 1. JSON.parse : 문자열 -> 객체 vs JSON.stringify : 객체 -> 문자열
console.log(json); // 문자열
let data = JSON.parse(json); // JSON.parse() : 문자열을 객체(배열)로 바꿔줌
// JSON이라는 object가 가지고 있는 parse라는 method
console.log(data); // 객체

console.clear();



// button<삭제> 템플릿
let btnTemplate = "<button class ='btn btn-danger' onclick='deleteTr(event)'>삭제</button>";
function deleteTr(parameter){
  console.dir(parameter.target.parentElement.parentElement);
  // console.dir() : 객체의 속성을 console에 출력 -> parameter1의 속성을 확인
  // parameter1.target : button -> 이벤트가 일어날 객체
  // parameter1.target.parentElement : td
  // parameter1.targer.parentElemetn.parentElement : tr
  // -> button 태그의 상위요소들을 이용해서 저장된 <tr><td>userValue</td></tr> 제거.
  parameter.target.parentElement.parentElement.remove(); // 제거
}





/*
for (let emp of data){ // 배열의 수만큼만 반복
  // emp : data 안에 있는 한 요소
  console.log(emp);
}
*/

let fields = ['id', 'first_name', 'gender', 'email', 'salary'];

// 사원목록(table형식)을 출력
let elist = "<table class = 'table'><thead><tr>";
for (let field of fields){
  elist += `<th>${field}</th>`;
}
elist += '<th>삭제</th>';
elist += "<tbody>";
for (let emp of data){ // data : 배열
  elist += makeTr(emp);
}
elist += "</tr><tbody></table>";
document.write(elist);



// button 이벤트 -> click
document.querySelector('button.btn-primary').addEventListener('click', function() {
  // alert(`click 이벤트 호출`);
  let searchValue = document.querySelector('#userValue').value;
  let list = "";
  for(let emp of data){
    if (searchValue == 'All' || searchValue == emp.gender){
      list += makeTr(emp);
    }
  }
  document.querySelector('table.table>tbody').innerHTML = list; // -> table class에서 table의 tbody 안에 있는 innerHTML을 찾아서 list를 넣어라
  // <tbody>   </tbody> 안에 있는 속성 : innerHTML
}); 
// addEventListener() : 찾아온 요소에 이벤트 등록
// addEventListener('click', function() { }) -> click 이라는 이벤트가 발생하면 function 실행
// function(){alert(`click 이벤트 호출`);} -> function의 기능 : 경고창에 'click 이벤트 호출' 출력
/*
document.querySelector('button.btn-primary'); // btn-primary라는 클래스를 가진 button 태그 찾기
document.querySelector('button#searchBtn'); // searchBtn이라는 id를 가진 button 태그 찾기
*/


// select 이벤트 -> change
document.querySelector('select.form-control').addEventListener('change', function(){
  let slist = "";
  let searchValue = document.querySelector('#selectGender').value; // searchValue : select 태그의 value 값을 넣어줌
  console.log(searchValue);
  for(let emp of data){
    if (searchValue == 'All' || searchValue == emp.gender){
      slist += makeTr(emp);
      console.log(slist);
    }
  }
  document.querySelector('table.table>tbody').innerHTML = slist;
})


// makeTr() : tr을 생성하는 함수
function makeTr(emp) {
  let str = "<tr>";
  // 속성을 정의
  let fields = ['id', 'first_name', 'gender', 'email', 'salary'];
  for(let field of fields){ // field : fields라는 배열의 요소
    // console.log(emp[field]); // emp라는 객체가 가지고 있는 속성 -> emp['id'] == emp.id
    str += `<td>${emp[field]}</td>`;
  }
  str += `<td>${btnTemplate}</td>`;
  str += '</tr>';
  return str;
}

console.log(makeTr({
  id:12,
  first_name: 'kildong',
  email: 'kildong@email.com'
  }));


