// Add the decorating "defer()" to functions

function f(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function(ms) {
    // return (a, b) => {
    //     setTimeout(() => this(a, b), ms);
    // };

    // solution
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
}

f.defer(1000)(1, 2);