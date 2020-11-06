// variables & block scope

// global scope
let age = 30;
// let age = 50; * already been declared

if(true){
    // block scope * declared inside a code block
    let age = 40;
    let name = 'ely';
    console.log('inside 1st code block: ', age, name);

    if(true){
        // block scope * uses age = 40, unless declare the variable inside second code block
        let age = 50;
        console.log('inside 2nd code block: ', age);
    }
}

// global scope
console.log('outside code block: ', age, name);

// same scope rules applies to const
// var ignores block scope