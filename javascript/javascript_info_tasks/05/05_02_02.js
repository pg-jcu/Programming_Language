// Why 6.35.toFixed(1) == 6.3?

console.log(1.35.toFixed(20));

console.log(6.35.toFixed(20));

console.log((6.35 * 10).toFixed(20));

console.log(Math.round(6.35 * 10) / 10);

console.log(Math.round(1.35 * 10) / 10);