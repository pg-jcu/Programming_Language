// Filter range "in place"

function filterRangeInPlace(arr, a, b) {
    arr.splice(0, arr.length, ...arr.filter(item => a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr);

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];

//         if (val < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }