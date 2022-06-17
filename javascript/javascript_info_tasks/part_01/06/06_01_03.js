// Fibonacci numbers

function fib(n) {
    // very slow...
    // return n === 1 || n === 2 ? 1 : fib(n - 1) + fib(n - 2);

    let arr = [];

    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            arr[i] = 1;
        } else {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
    }

    return arr[n - 1];
}

// solution
// function fib(n) {
//     let a = 1;
//     let b = 1;

//     for (let i = 3; i <= n; i ++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }

// dynamic programming
// function fib(n) {
//     function fibHelp(lastTwo, x) {
//         const sum = lastTwo[0] + lastTwo[1];
//         return x === 2 ? sum : fibHelp([lastTwo[1], sum], x - 1);
//     }
//     return n < 2 ? n : fibHelp([0, 1], n);
// }