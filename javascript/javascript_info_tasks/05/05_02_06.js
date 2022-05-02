// A random integer from min to max

function randomInteger(min, max) {
    let num = min + Math.random() * (max + 1 - min);
    return Math.floor(num);
    /* alternative way
    let num = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(num);
    */
}

console.log(randomInteger(1, 5));