// Class extends Object

class Rabbit extends Object {
    constructor(name) {
        super();
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");

console.log(rabbit.hasOwnProperty('name'));
console.log(Rabbit.__proto__ === Object);
console.log(Object.__proto__ === Function.prototype);