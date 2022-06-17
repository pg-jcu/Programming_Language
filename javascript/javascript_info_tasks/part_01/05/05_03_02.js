// Check for spam

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    if (lowerStr.includes('xxx') || lowerStr.includes('viagra')) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();

//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }