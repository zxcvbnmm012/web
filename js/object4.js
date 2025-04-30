// object4.js
// filter()

let numAry = [20, 27, 33, 42, 19, 63, 52];
let filterAry = numAry.filter(function(item, idx, ary){ // 원래 배열을 대상으로 조건을 만족하는 새로운 배열 생성
  if (item % 2 == 0){
    return true;
  }

  return false;
}); 

console.log(filterAry);



// salary가 5000이 넘는 사원들을 empAry에 저장
let jsonAry =  JSON.parse(json);
let empAry = jsonAry.filter(function(item){
  console.log(item);
  if (item.salary >= 5000){
    return true;

  }
  return false;
})
console.log(empAry);


/* forEach vs filter
forEach : 실행 / filter : 추출 */