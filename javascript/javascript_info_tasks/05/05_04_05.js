// A maximal subarray

function getMaxSubSum(arr) {
    let negativeCount = 0;
    let startIndex = 0;
    let subSum = 0;
    let maxSum = 0;

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
        maxSum = Math.max(maxSum, subSum);

        if (subSum < 0) subSum = 0;
    }

    return maxSum;
}