// Condition
// if; salary > 10000; .....
// else; ....
if (true) {
  // if statement
  console.log('if statement');
} else {
  // else statement
  console.log('else statement');
}

// if(true) {...}

// const appleColor = 'red';

// IF
// if (appleColor == 'red') {
//   console.log('ลูกแอปเปิ้ลสีแดง');
// }

// IF ELSE
// let temp = 1;
// if (temp <= 25) {
//   console.log('COOL');
// } else {
//   console.log('HOT');
// }

// IF ELSE ELSEIF
// if (true) {
//   // ...
// } else if (true) {
//   // ...
// } else if (true) {
//   // ...
// } else {
//   // ...
// }
// var number = 3;
// if (number === 1) {
//   console.log('Number is One');
// } else if (number === 2) {
//   console.log('Number is Two');
// } else if (number === 3) {
//   console.log('Number is Three');
// } else {
//   console.log('Unknow your number');
// }

// If shorthands
var myCar = 1;
let carBrand = myCar === 1 ? 'Honda' : 'Toyota';
console.log(carBrand);
// condition ? true : false;
// if (myCar === 1) {
//   return 'Honda';
// } else {
//   return 'Toyota';
// }

// Switch
// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }
const day = 1234;

switch (day) {
  case 'วันจันทร์':
    console.log('สวัสดี วันจันทร์');
    break;
  case 'วันอังคาร':
    console.log('สวัสดี วันอังคาร');
    break;
  case 'วันพุธ':
    console.log('สวัสดี วันพุธ');
    break;
  case 'วันพฤหัสบดี':
    console.log('สวัสดี วันพฤหัสบดี');
    break;
  case 'วันศุกร์':
    console.log('สวัสดี วันศุกร์');
    break;
  case 'วันเสาร์':
    console.log('สวัสดี วันเสาร์');
    break;
  case 'วันอาทิตย์':
    console.log('สวัสดี วันอาทิตย์');
    break;

  default:
    console.log(100 + 1);
    break;
}
