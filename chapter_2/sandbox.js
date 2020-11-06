// variable name is camelCase. It can also start with a $ or _ but not a number.

// let myAge = 38; 
// let year = 2020;

// console.log(age, year);

// age = 39;
// console.log(age);

// const points = 100;
// points = 50; "Can not change const"
// console.log(points);

// var score = 75; "Var is the older way to declare a variable"
// console.log(score);

// Make your variable nanmes meaningful.

/* 

Multiline comments.

*/

// Numbers = 1, 2, 3, 100, 3.14

// Strings = "" or '' "hello, world" "mario@thenetninja.co.uk"

// Boolean = true / false

// Null = Explicitly set a variable with no value

// Undefined = For variables that have not yet been defined

// Object = Complex data structures - arrays, dates, literals, etc

// Symbol = Used with objects

// strings

console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation

let firstName = 'Ely';
let lastName = 'Bourland';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting characters

console.log(fullName[2]);


// string length

console.log(fullName.length);


// string methods

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

let result = fullName.toLowerCase();

console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);