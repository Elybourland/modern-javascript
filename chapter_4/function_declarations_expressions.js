// function declarations
function greet(){
    console.log('hello there');
}

// function expressions
const speak = function(){
    console.log('good day!');
};

// greet();

speak();

// JavaScript is hoisting the function declarations with greet(). Can move function declaration at bottom with greet() at top.

// Use function expressions