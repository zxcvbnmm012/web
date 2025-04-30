// dom1.js

// createElement() -> 요소 생성
// appenChild() -> 부모요소와 자식요소 연결 
// setAttribute()
// querySelector()


// 이벤트
/* 
document.querySelector('#addBtn').addEventLister('click', addCallback);
function addCallback(){
  let fruit = document.getElementById('fruit').value; // querySelector와 기능 동일 -> 요소의 id값으로 찾음
  let price = document.getElementById('price').value;
  let newList = createLi(fruit, price);
  document.querySelector('ul').appendChild(newList);
}
*/
document.querySelector("#addBtn").addEventListener('click', function() {
  let fruit = document.getElementById('fruit').value; // querySelector와 기능 동일 -> 요소의 id값으로 찾음
  let price = document.getElementById('price').value;

  if (!fruit || !price){ // fruit == "" || price == ""
    alert("값을 입력하세요!");
    return; // 함수의 실행 종료
  }

  let newList = createLi(fruit, price);
  document.querySelector('ul').appendChild(newList);
  
  // 입력값 초기화
  document.getElementById('fruit').value = 0;
  document.querySelector('#price').value = 0;
});

function createLi(fruitName, fruitPrice) {
  let li = document.createElement("li");
  let sp1 = document.createElement("span");
  sp1.innerText = fruitName;
  let sp2 = document.createElement("span");
  sp2.innerText = fruitPrice + "원";
  let tx1 = document.createTextNode(" ");

  // 삭제버튼
  let btn = document.createElement("button");
  // <button id="delBtn" class="btn btn-danger">삭제</btn>
  btn.innerText = "삭제"
  btn.setAttribute('class', 'btn btn-danger');
  //btn.className = "btn btn-danger"; -> 클래스로 속성 세팅 변경
  btn.addEventListener('click', function(){
    btn.parentElement.remove(); // btn 객체의 상위 요소를 제거
  });

  li.appendChild(sp1);
  li.appendChild(tx1);
  li.appendChild(sp2);
  li.appendChild(btn);
  
  return li;
}

// ul>button : 부모의 바로 아래 자식
// ul button : 부모의 후손들 모두
document.querySelectorAll('ul button').forEach(function(item){
  console.log(item);
  item.addEventListener('click',function(){
    item.parentElement.remove();
  })
})


// li에 스타일
document.querySelectorAll('li').forEach(item => {
  item.addEventListener('mouseover', function(){
    item.style.backgroundColor = "cyan";
  })
  item.addEventListener('mouseout', function(){
    item.style.backgroundColor = ""; // 원래로 돌아감
  })
});


// <li><span>사과</span><span>2000원</span></li>
let li = document.createElement("li"); // <li>라는 태그를 만들어라 -> 태그는 element(요소)
let sp1 = document.createElement("span"); // <span>라는 태그를 만들어라
sp1.innerText = "사과"; // <span>사과<span> -> 텍스트(text)
let sp2 = document.createElement("span"); // <span>라는 태그를 만들어라
sp2.innerText = "2000원"; // <span>사과<span> -> 텍스트(text)
let tx1 = document.createTextNode("-"); // text에 "-" 노드를 만들어라
let btn = document.createElement("button");
btn.innerText = "삭제"
btn.addEventListener('click', function(){
  btn.parentElement.remove(); // btn 객체의 상위 요소를 제거
});

li.appendChild(sp1); // li에 자식요소로 sp1를 붙여라
li.appendChild(tx1);
li.appendChild(sp2);
li.appendChild(btn);

console.log(li);
document.querySelector('ul').appendChild(li); // document에서 ul부분을 찾아서 자식요소로 li를 붙여라