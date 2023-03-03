function partial(func, ...args) {
  return function partiallyApplied(...moreArgs) {
    return func(...args, ...moreArgs);
  }
}

function calculate(x, y, z) {
  return (x + y) * z;
}

const multiply10By = partial(calculate, 8, 2);

const result = multiply10By(5);

console.log(result);