// The difference between calls

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.sayHi = function() {
    console.log(this.name);
}

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
console.log(rabbit.__proto__);
console.log(Object.getPrototypeOf(rabbit));