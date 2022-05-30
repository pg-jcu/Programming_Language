// Delaying decorator

function delay(f, ms) {
    function wrapper(...x) {
        setTimeout(() => f.apply(this, x), ms);
    }

    return wrapper;

    // solution
    // return function () {
    //     setTimeout(() => f.apply(this, arguments), ms);
    // };
}

function f(x) {
    console.log(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");