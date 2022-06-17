// A random number from min to max

function random(min, max) {
    while (true) {
        let num = Math.random() * max;

        if (min <= num) {
            return num;
        }
    }
}

console.log(random(1, 5));

// function random(min, max) {
//     return min + Math.random() * (max - min);
// }