// else if statements

const password = 'p@ss';
if(password.length >= 12){
    console.log('that password is mighty strong, dude!');
} else if (password.length >= 8){
    console.log('password is long enough!')
} else {
    console.log('please try again');
}