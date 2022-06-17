// Sum with an arbitrary amount of brackets

function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}

console.log(sum(1) == 1)
console.log(+sum(1)(2));