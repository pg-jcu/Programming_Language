// Symbol.iterator
const obj = { a: 1, b: 2, c: 3 };

obj[Symbol.iterator] = function* () {
  for (const key of Object.keys(this)) {
    yield [key, this[key]];
  }
};

for (const [key, value] of obj) {
  console.log(`${key}: ${value}`);
}

// Symbol.toStringTag
class MyClass {
  [Symbol.toStringTag] = "MyClass";
}

console.log(Object.prototype.toString.call(new MyClass()));

function MyFunc() {}

MyFunc.prototype[Symbol.toStringTag] = 'MyFunc';

console.log(Object.prototype.toString.call(new MyFunc()));

// Symbol.toPrimitive
class Life {
  valueOf() {
    return 42;
  }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "number":
        return this.valueOf();
      case "string":
        return "Forty Two";
      case "default":
        return true;
    }
  }
}

const myLife = new Life();
console.log(+myLife);
console.log(`${myLife}`);
console.log(myLife + '');

// Symbol.asyncIterator
// class MyAsyncIterable {
//   async *[Symbol.asyncIterator]() {
//     for (let i = 0; i < 5; i++) {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       yield i;
//     }
//   }
// }

// (async () => {
//   for await (const value of new MyAsyncIterable()) {
//     console.log(value);
//   }
// })();

// Symbol.hasInstance
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

const arr = [1, 2, 3];
console.log(arr instanceof MyArray);

// Symbol.isConcatSpreadable
const arr1 = [1, 2, 3];
const spreadable = {
  [Symbol.isConcatSpreadable]: true,
  0: 4, 
  1: 5, 
  2: 6,
  length: 3,
};

console.log([].concat(arr1, spreadable));
