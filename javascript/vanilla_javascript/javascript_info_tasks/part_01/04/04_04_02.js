// Create a calculator

let calculator = {
    a: 0,
    b: 0,
    read() {
        this.a = +prompt('a?', this.a);
        this.b = +prompt('b?', this.b);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());