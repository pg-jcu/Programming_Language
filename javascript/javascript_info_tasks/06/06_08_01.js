// Output every second

function printNumbers(from, to) {
    // Using setInterval
    // let timeId = setInterval(() => {
    //     console.log(from);
    //     if (from === to) {
    //         clearInterval(timeId);
    //     }
    //     from++;
    // }, 1000);

    // if we want the function to run immediately
    // function run() {
    //     console.log(from);
    //     if (from === to) {
    //         clearInterval(timeId);
    //     }
    //     from ++;
    // }

    // run();
    // let timeId = setInterval(run, 1000);

    // Using nested setTimeout
    let timeId = setTimeout(function run() {
        console.log(from);

        if (from === to) {
            clearTimeout(timeId);
        } else {
            setTimeout(run, 1000);
            from++;
        }

        // solution
        // if (from < to) {
        //     setTimeout(run, 1000);
        // }
        // from++;
    });
}

printNumbers(2, 10);