function memoize(func) {
  const cache = new Map();

  return function() {
    const key = JSON.stringify(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, arguments);
    cache.set(key, result);
    return result;
  }
}

function fibonacci(n) {
  if (n < 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.time('total');
console.time('sub1');
const result1 = memoizedFibonacci(30);
console.timeEnd('sub1');
console.time('sub2');
const result2 = memoizedFibonacci(29);
console.timeEnd('sub2');
console.time('sub3');
const result3 = memoizedFibonacci(30);
console.timeEnd('sub3');
console.timeEnd('total');
