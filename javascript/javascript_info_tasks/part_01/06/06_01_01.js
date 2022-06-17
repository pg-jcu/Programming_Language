// Sum all numbers till the given one

function forLoopSumTo(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function recursionSumTo(n) {
    return n === 1 ? 1 : recursionSumTo(n - 1) + n;
}

function formulaSumTo(n) {
    return n * (n + 1) / 2
}

function bench(f) {
    let num = 100;

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(num);
    return Date.now() - start;
}

// heating up
bench(forLoopSumTo);
bench(recursionSumTo);
bench(formulaSumTo);

let time1 = 0;
let time2 = 0;
let time3 = 0;

for (let i = 0; i < 10; i++) {
    time1 += bench(forLoopSumTo);
    time2 += bench(recursionSumTo);
    time3 += bench(formulaSumTo);
}

console.log(`for loop: ${time1}`);
console.log(`resursion: ${time2}`);
console.log(`formula: ${time3}`);