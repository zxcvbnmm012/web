// for4.js



// 1) 3단만 출력
document.write("<h3>구구단 출력</h3>"); // document 영역에 text를 작성
for (let i = 1; i <= 9; i++){
  document.write(`<p> 3 * ${i} = ${i*3}</p>`);
}


// 2) 여러 단을 출력
for (let i = 1; i <= 9; i++){
  document.write(`<h3>${i}단</h3>`);
  for (let j = 1; j <= 9; j++){
    document.write(`<p>${i} * ${j} = ${i*j}</p>`);
  }
}


/* table 만들기
<table>
    <tbody>
        <tr>
            <td>first</td>
            <td>second</td>
            <td>third</td>  
        </tr>
    </tbody>
</table>
*/

// row : <tr>
// column : <td>


// 3) table에 구구단 세로로 입력하기
document.write("<table border = '3'>");
document.write("<tbody>");
for (let i = 1; i <= 9; i++){
  for (let j = 1; j <= 9; j++){
    document.write("<tr>");
    document.write(`<td>${i} * ${j} = ${i*j}</td>`);
    // document.write(`<td>${i}</td> <td>*</td> <td>${j}</td> <td>=</td> <td>${i*j}</td>`);
    document.write("</td>")
  }
}
document.write("</tbody>");
document.write("</table>");


// 4) table에 구구단 가로로 입력하기
document.write("<table border = '3'>");
document.write("<tbody>");
for (let i = 1; i <= 9; i++){
  document.write("<tr>");
  for (let j = 1; j <= 9; j++){
    document.write(`<td>${j} * ${i} = ${i*j}</td>`);
    document.write("</td>")
  }
  document.write("</tr>");
}
document.write("</tbody>");
document.write("</table>");


// 5) table에 구구단 가로로 입력하기 -> document.write 대신 str 변수 사용
let str = ""; // str에 문자열 저장
str += "<table border = '3'>";
str += "<tbody>";
for (let i = 1; i <= 9; i++){
  str += "<tr>";
  for (let j = 1; j <= 9; j++){
    str += `<td>${j} * ${i} = ${i*j}</td>`;
  }
  str += "</tr>";
}
str += "</tbody>";
str += "</table>";
document.write(str); // document.write를 한번만 사용해서 str 변수 출력


// 6) table에 구구단 가로로 입력하기 -> class 사용 (bootstrap)
let str1 = "";
str += "<table class = 'table table-striped'>"; // table class를 사용해서 표 스타일 지정
str += "<tbody";
for (let i = 1; i <= 9; i++){
  str += "<tr>";
  for (let j = 1; j <= 9; j++){
    str += `<td>${j} * ${i} = ${i*j}</td>`;
  }
  str += "</tr>";
}
str += "</tbody>";
str += "</table>";
document.write(str); // document.write를 한번만 사용해서 str 변수 출력

