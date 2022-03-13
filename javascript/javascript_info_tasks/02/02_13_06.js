// Repeat until the input is correct

while (true) {
    let value = prompt('Enter a number greater than 100?', '');

    if (value > 100 || value === '' || value === null) {
        break;
    }
}

// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);