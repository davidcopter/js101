// Loop

// FOR LOOP
// for (intitalValue; contidtion; increment) {
//   // ...
// }
// nu++: num = num + 1
// num += 2; num = num + 2
// for (let num = 0; num < 10; num += 2) {
//   console.log('num = ', num);
// }

// WHILE LOOP
// while (condition) {
//     ...
// }

// var score = 10;
// while (score < 20) {
//   score++;
//   console.log('score ', score);
// }

var fruits = ['apple', 'orange', 'cherry'];
// variable.methods()
fruits.forEach((value, index) => {
  console.log('Index = ', index);
  console.log('Value = ', value);
});

const newFruits = fruits.filter((element) => {
  return element != 'apple';
});
console.log('newFruits => ', newFruits);
