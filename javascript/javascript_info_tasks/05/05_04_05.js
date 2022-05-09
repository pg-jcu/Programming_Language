// A maximal subarray

function getMaxSubSum(arr) {
    let negativeCount = 0;
    let subSumArray = [];
    let startIndex = 0;
    let subSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            ++negativeCount;
        }
        else {
            startIndex = i;
            break;
        }
    }

    if (negativeCount === arr.length) return 0;

    for (let i = startIndex; i < arr.length; i++) {
        subSum += arr[i];

        if (subSum < 0) subSum = 0;

        if (arr[i] < 0) {
            subSumArray.push(subSum);
        }
        else {
            subSumArray.push(subSum, arr[i]);
        }
    }

    return Math.max(...subSumArray);;
}

console.log(getMaxSubSum([2, -1, 2, 3, -9, 11]));