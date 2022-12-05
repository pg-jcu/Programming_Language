export {};

// Function
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
  return {
    param
  };
}

const wrapped = wrap(10);

// Interface
interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c'],
};

// Type alias
type Elements<T> = {
  list: T[];
};

const elements: Elements<number> = {
  list: [1, 2, 3],
};

// Class
class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
console.log("length:" + queue.length);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log("length:" + queue.length);