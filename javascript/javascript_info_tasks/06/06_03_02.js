// Which variables are available?

function makeWorker() {
    let name = "Pete";

    return function () {
        console.log(name);
    };
}

let name = "John";

let work = makeWorker();

work(); // Pete