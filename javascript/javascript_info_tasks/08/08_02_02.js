// Create an object with the same constructor

function User(name) {
    this.name = name;
};

let user = new User('John');
let user2 = new user.constructor('Pete');

console.log(user2.name); // Pete

User.prototype = {};

let user3 = new User('Tom');
let user4 = new user3.constructor('Jenny'); // == new Object('Jenny')

console.log(user4.name); // undefined 