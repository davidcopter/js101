// ## Comparison
// Operations
// AND: &&
// OR: ||
console.log(true && true); // true
console.log(true && false); // false

const a = true;
let b = true;

console.log(a && true);
console.log(false && b);

var c = a && b;
console.log('result=', c);

console.log(true || false); // true
console.log(false || false); // false

// Equal: ==, ===
// Not Equal: !=, !==
// More: >, >=
// Less: <, <=
// console.log(5 > 6);
// console.log(9 >= 9);
// console.log(3 < 8);
// console.log(100 == 100);
// console.log(100 == 101);
// console.log(100 != 100);
// console.log(100 != 101);

console.log("100 == '100' ", 100 == '100'); // true
// '100' == '100'
console.log("100 === '100' ", 100 === '100'); // false
// 100(number) === '100'(string)

// NOT: !
console.log(!true);

// "cat" === "dog"
console.log('cat' === 'dog'); // false
// !(1024 > 8)
console.log(!(1024 > 8)); // false
// !(true && true)
console.log(!(true && true)); // flase
// true == !true
console.log(true == !true); // false
// (!true == 1234) && (true > 0)
console.log(!true == 1234 && true > 0);
console.log(!true == 1234); // flase == 1234(true) // false
console.log(true > 0); // 1 > 0 =  true

if (true) {
  console.log('I am true');
}
