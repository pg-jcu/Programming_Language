// Filter through function

function inBetween(a, b) {
    return function (v) {
        return a <= v && v <= b
    };
}

function inArray(arr) {
    return function (v) {
        return arr.includes(v);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));