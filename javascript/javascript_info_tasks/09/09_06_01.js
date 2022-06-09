// Strange instanceof

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log(a instanceof B); // the prototype actually defines the type, not the constructor function.