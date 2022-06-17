// Repeat until the input is a number

function readNumber() {

    while(true) {
        let value = prompt();

        if (value === null || value === '') {
            return null;
        }

        if (isFinite(value)) {
            return +value;
        }
    }
}

alert(readNumber());

// function readNumber() {
//     let num;

//     do {
//         num = prompt("Enter a number please?", 0);
//     } while (!isFinite(num));

//     if (num === null || num === '') return null;

//     return +num;
// }