// Function
// function funcName(parameters) {
//   // คำสั่ง
// }

// 1 No Return Function
function add(num1, num2) {
  console.log(num1 + num2);
}
add(1, 8);

// 2 Return Function
function multiply(num1, num2) {
  let results = num1 * num2;
  return results;
}
const results = multiply(3, 5);
console.log(results);

// Arrow Function
multiply2 = (num1, num2) => {
  return num1 * num2;
};
console.log(multiply2(1, 3));

multiply3 = (num1, num2) => num1 * num2;
console.log(multiply3(2, 5));

// สร้างฟังก์ชั่นเช็คอุณหภูมิร่างกาย
// อุณหภูมิร่างกาย > 37.5 ; "คุณเสี่ยงเป็นโควิต19"
// อุณหภูมิร่างกาย < 37.5 ; "คุณปกติ"
// function covid19(bodyTemp) {}
function covid19(bodyTemp) {
  if (bodyTemp >= 37.5) {
    console.log('คุณเสี่ยงเป็นโควิต19');
  } else {
    console.log('คุณปกติ');
  }
}
covid19(40);

function covid19_2(bodyTemp) {
  let msg = '';
  if (bodyTemp >= 37.5) {
    msg = 'คุณเสี่ยงเป็นโควิต19';
  } else {
    msg = 'คุณปกติ';
  }

  return msg;
}
const showMsg = covid19_2(30);
console.log('showMsg', showMsg);

covid19_3 = (bodyTemp) =>
  bodyTemp >= 37.5 ? 'คุณเสี่ยงเป็นโควิต19' : 'คุณปกติ';
const showMsg2 = covid19_3(39);
console.log('showMsg2', showMsg2);
