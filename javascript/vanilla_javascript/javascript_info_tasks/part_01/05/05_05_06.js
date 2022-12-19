// Create an extendable calculator

function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };

    this.calculate = function (str) {
        let splitStr = str.split(' ');
        let a = +splitStr[0];
        let op = splitStr[1];
        let b = +splitStr[2];
    
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };
    
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator;

console.log(calc.calculate("3 * 5"));