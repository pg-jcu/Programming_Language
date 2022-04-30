// Two functions - one object
let test = {};


function A() { return test; }

function B() { return test; }

let a = new A;
let b = new B;

console.log(a == b);