// Callback Function
// const myArr = [];
const innerFunc = (value, index, array) => {
  console.log('value', value);
  console.log('index', index);
  console.log('array', array);
};
myArr.forEach(innerFunc);
// functionName = () => {}

// function sum(x, y) {
//   let result = multiply(x);

//   return result + y;
// }

// function multiply(number) {
//   return number * 2;
// }

// const answer = sum(3, 5);
// console.log('answer', answer);
