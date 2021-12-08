// FUNCTION EXPRESSION
// const sayHello = function() {
//   console.log('Hello');
// }

// ES6 ARROW FUNCTION
// const sayHello = () => {
//   console.log('Hello');
// }

// ES6 ONE LINE ARROW FUNCTION
// const sayHello = () => console.log('Hello');

// const sayHello = () => 'Hello';
//Same as above
// const sayHello = function() {
//   return 'Hello';
// }

// RETURN OBJECT
// const sayHello = () => ({ msg: 'Hello' });

// Single param doesn't need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('SanyaOdare', 'Alani');

const users = ['Temitope', 'Omolola', 'Ashake'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
