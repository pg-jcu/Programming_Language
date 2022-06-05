// Changing "prototype"

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

// Rabbit.prototype = {};

console.log(rabbit.eats); // true

Rabbit.prototype.eats = false;

console.log(rabbit.eats); // false

delete rabbit.eats;

console.log(rabbit.eats); // false

delete Rabbit.prototype.eats;

console.log(rabbit.eats); // undefined