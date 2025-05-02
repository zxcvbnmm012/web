// dom2.js

let userList = [{
  uid: 'user01',
  uname: '홍길동',
  phone: '010-1111-1111'
}, {
  uid: 'user02',
  uname: '김시욱',
  phone: '010-2222-2222'
}, {
  uid: 'user03',
  uname: '김해민',
  phone: '010-3333-3333'
}, {
  uid: 'user04',
  uname: '이영돈',
  phone: '010-4444-4444'
}, {
  uid: 'user05',
  uname: '박우식',
  phone: '010-5555-5555'
}];

// userList의 정보 활용해서 출력
userList.forEach(function(user){
  let tr = makeRow(user);
  document.querySelector('#list').appendChild(tr);
});


// 이벤트
document.querySelector('form[name="addForm"]').addEventListener('submit', function (e) {
  // form태그의 속성으로 요소 선택 ; form[] -> 속성선택자  p.405
  e.preventDefault(); // submit 이벤트가 가진 기본 기능 : 버튼 누르면 다른 페이지로 넘어감 
  // -> preventDefault : 기본 기능(페이지 이동) 차단
  console.log(e);
  // let uid = document.querySelector('input').value; -> input태그들 중 첫번째 input 태그의 값을 찾음
  let uid = document.querySelector('input[name="userId"]').value;
  let uname = document.querySelector('input[name="userName"]').value;
  let phone = document.querySelector('input[name="phone"]').value;

  //validation check
  if (!uid || uid.length < 3){
    alert('아이디를 확인하세요');
    return;
  }
  if (!uname || uname.length > 5){
    alert('이름을 확인하세요');
    return;
  }

  // object {}
  let userInfo = {uid, uname, phone};
    // 속성: 값 -> 값은 변수 uid에 저장된 값
    // 속성과 값이 같은 값이면 줄여쓰기 가능 
    // -> let userInfo = {uid:uid, uname:uname, phone:phone};
  let tr = makeRow(userInfo);

  // tbody의 하위요소 등록
  document.querySelector('#list').appendChild(tr); // id가 list인 tbody의 하위요소로 tr 붙임
});

// 선택 삭제 : checkbox에 선택된 것을 삭제
// M1) 조건문
document.querySelector('button.selected').addEventListener('click',function() {
  document.querySelectorAll('tbody#list input').forEach(function(item){
    if(item.checked){
      console.log(item);
      item.parentElement.parentElement.remove();
    }
  });
})

/* M2) 속성이 checked인 것을 찾기
document.querySelector('button.selected').addEventListener('click',function() {
  document.querySelectorAll('tbody#list input:checked').forEach(function(item){
      console.log(item);
      item.parentElement.parentElement.remove();
  });
})
*/


// tr, td 생성 함수
function makeRow(user = {uid, uname, phone}) {
  // tr 생성
  let tr = document.createElement('tr'); // <tr></tr>

  // 선택한 tr의 하위요소(td)의 값을 input에 할당
  tr.addEventListener('click', function(e){
    // e.stopPropagation(); -> tr의 click 이벤트만 발생하고 removeTr(삭제버튼)의 click 이벤트는 발생하지않음
    console.log(tr.children[0].innerHTML); // children : 하위요소 / parentElement : 상위요소
    // tr.children[0].innerHtml = user.uid
    // tr.children[1].innerHtml = user.uname
    // tr.children[2].innerHtml = user.phone
    document.querySelector('input[name="userId"]').value = tr.children[1].innerHTML;
    // tr.children[0] : 첫번째 td -> checkbox
    // tr.children[1] : 두번째 td -> userId

    document.querySelector('input[name="userName"]').value = tr.children[2].innerHTML;
    // tr.children[2] : 세번째 td -> userName
    document.querySelector('input[name="phone"]').value = tr.children[3].innerHTML;
    // tr.children[3] : 네번째 td -> phone
  }, true) // (캡쳐링)

  // checkbox 생성
  let td2 = document.createElement('td');
  let chk = document.createElement('input');
  chk.setAttribute('type', 'checkbox');
  td2.appendChild(chk);
  tr.appendChild(td2);

  // td 생성
  for (let prop in user) { // prop는 가변변수
    let td = document.createElement('td'); // <td></td>
    td.innerHTML = user[prop]; // 1) usrInfo["uid"] == usreInfo.uid 2) usrInfo["uname"] == usreInfo.uname 3) usrInfo["phone"] == usreInfo.phone
    tr.appendChild(td); // tr의 하위요소로 td를 붙임
  }

  // 삭제버튼 생성
  let td = document.createElement('td'); // <td></td>
  let btn = document.createElement('button'); // <button></button>
  btn.innerText = '삭제'; // <button>삭제</button>
  btn.className = "btn btn-danger"; // <button class="btn btn-danger">삭제</button>

  // btn에 click 이벤트 추가하기
  // M1) 이벤트가 일어나면 eventhandler 불러와서 사용 : removeTr
  btn.addEventListener('click', removeTr, true); // true : 캡처링 -> 상위에서 하위로 검색 / false :버블링 -> 하위에서 상위로 검색 ( default는 false)
  // M2) 태그 안에 onclick 속성을 넣어서 이벤트 넣기
  // btn.setAttribute('onclick', 'removeTr2(event)'); 

  console.log(btn);
  td.appendChild(btn); // <td><button>삭제</button></td>
  tr.appendChild(td); // <tr><td><button>삭제</button></td></tr>
  return tr;
};


// M1) eventhandler(callback함수) removeTr 정의
 function removeTr(e){
  // e.stopPropagation(); // 이벤트 전파 중단 -> 이벤트가 발생한 상위요소를 찾아가는 것을 중단 (버블링)
  // -> removeTr(삭제버튼)에 발생하는 click 이벤트만 실행하고 tr에 발생하는 click 이벤트는 실행하지 않음
  console.log(e, e.target, this); // e != (e.target == this == btn)
  e.target.parentElement.parentElement.remove();
}

/* M2)
function removeTr2(e){
  console.log(e.target, this); // (e.target ==  btn) !== thie -> this는 window
  e.target.parentElement.parentElement.remove();
}
*/


