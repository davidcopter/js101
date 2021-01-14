// alert('GOOD MORNING');

// const name = prompt('Enter your name');
// console.log(name);

// const answer = confirm('Your age more than 10 year old?');
// console.log('My answer is ', answer);

// โจทย์
// สร้างฟังก์ชั่นสำหรับตรวจสอบอายุการเข้าใช้บริการสถานบันเทิงแห่งหนึ่ง โดยถ้าหากอายุต่ำกว่า 20 ปี จะมีข้อความแจ้งเตือนบนหน้าเว็บไซต์ว่า “คุณไม่มีสิทธิเข้าใช้บริการ”
// กำหนดให้รับอายุของผู้ใช้งานผ่าน prompt
// function checkAge(age) {
//   if (age < 20) {
//     alert('คุณไม่มีสิทธิ์ใช้บริการ!!');
//   } else {
//     console.log('คุณสามารถเข้าใช้บริการได้');
//   }
// }

// const cusAge = prompt('Enter your age');
// checkAge(cusAge);

// ["กรุงเทพ", '', '',]
// แสดงแลชื่อจังหวัดโดยใช้ loop
// จังหวัด.... (console)
let city = ['กรุงเทพ', 'เลย', 'ประจวบ', 'นนทบุรี', 'ปทุมธานี'];
city.forEach((value) => console.log('จังหวัด' + value));
