function curry(func, arity = func.length) {
  return function curried(...args) {
    if (args.length >= arity) return func(...args);
    return function(...moreArgs) {
      return curried(...args, ...moreArgs);
    } 
  }
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

const distanceFromOrigin = curry(distance, 4)(0, 0);

const d1 = distanceFromOrigin(1, 1);
const d2 = distanceFromOrigin(2, 2);
