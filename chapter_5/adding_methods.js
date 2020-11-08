// Adding methods

let user = {
    name: 'ely',
    age: 38,
    email: 'ely@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function() {
        console.log('the user logged in');
    },
    logout: function() {
        console.log('the user logged out');
    }
};

user.login();
user.logout();

const name = 'mario';
name.toUpperCase();