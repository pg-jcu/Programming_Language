// Accessing array[-1]

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (+prop < 0) {
      return Reflect.get(target, target.length + +prop, receiver);
    } else {
      return Reflect.get(target, prop, receiver);
    }

    // solution
    // if (prop < 0) {
    //   prop = +prop + target.length;
    // }
    // return Reflect.get(target, prop, receiver);
  }
});

console.log(array[-1]);
console.log(array[-2]);