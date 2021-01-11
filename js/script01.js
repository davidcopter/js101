// Variable Type
// String: Hello, Cat, Rat
// Number: 1, 3, 1000, 1.34, -98, -0.81, 0
// Boolean: TRUE, FALSE
// Array: ["A", "B", 123, FALSE] (index)
// Object: key -> value; name -> copter,
// count -> 12
// {"name": "copter", "count": 12}
// Empty: null, undefinded

// var, let, const
var num1 = 3; // number
var city = 'bangkok'; // string

let isMonday = true; // boolean

const apple = 'red';

console.log(num1);
console.log(city);
// console.log(City);
console.log(isMonday);
console.log(apple);

num1 = 99;
city = 'pattaya';

console.log(num1);
console.log(city);

// num1 = num1 + 1
// console.log(num1 + 1);
// console.log(isMonday + 1);
// console.log(apple + 1); // "red" + "1"

// apple = 'green';
// console.log(apple);

var myNumber = [1, 2, 3, city, false];
console.log(myNumber);
// console.log('myNumber in Array 0 = ', myNumber[0]);
// console.log('myNumber in Array 1 = ', myNumber[1]);
// console.log('myNumber in Array 3 = ', myNumber[3]);
// console.log('myNumber in Array 4 = ', myNumber[4]);

let userA = {
  name: 'copter',
  city: 'Bangkok',
  salary: 1000000,
  isVerify: false,
};
console.log('userA information', userA);
// console.log('userA name is = ', userA.name);
// console.log('userA isVerify is = ', userA.isVerify);
myNumber[0] = 99;
console.log(myNumber);

userA.city = 'Patong';
console.log('new userA information', userA);

var userB = {
  car: 'honda',
  telNumber: '0000000000',
};
