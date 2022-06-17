// Copy and sort array

function copySorted(arr) {
    let copyArr = arr.slice();
    
    return copyArr.sort();
    // return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);