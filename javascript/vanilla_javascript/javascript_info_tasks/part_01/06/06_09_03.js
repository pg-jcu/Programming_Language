// Debounce decorator

function debounce(f, ms) {
    let timeout;

    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => f.apply(this, arguments), ms);
    };
}

let f = debounce(console.log, 1000);

f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);