// event loop
const Item = class {
  time;
  block;
  constructor(block, time) {
    this.block = block;
    this.time = time + performance.now();
  }
};

const queue = new Set();

const f = (time) => {
  queue.forEach((item) => {
    if (item.time > time) return;
    queue.delete(item);
    item.block();
  });
  requestAnimationFrame(f);
};
requestAnimationFrame(f);

const timeout = (block, time) => queue.add(new Item(block, time));
timeout((_) => console.log("hello"), 1000);

// non blocking for
const woring = (_) => {};
for (let i = 0; i < 10000; i++) woring();

const nbFor = (max, load, block) => {
  let i = 0;
  const f = (time) => {
    let curr = load;

    while (curr-- && i < max) {
      block();
      i++;
    }

    console.log(i);
    if (i < max - 1) requestAnimationFrame(f);
  };

  requestAnimationFrame(f);
};

nbFor(100, 10, woring);

// generator
const gene = function* (max, load, block) {
  let i = 0,
    curr = load;

  while (i <= max) {
    if (curr--) {
      block();
      i++;
    } else {
      curr = load;
      console.log(i);
      yield;
    }
  }
};

const nbForGen = (max, load, block) => {
  const iterator = gene(max, load, block);
  const f = (_) => iterator.next().done || timeout(f);
  timeout(f);
};

const working = (_) => {};

nbFor(100, 10, working);

// Promise
const genePromise = function* (max, load, block) {
  let i = 0;

  while (i < max) {
    yield new Promise((res) => {
      let curr = load;

      while (curr-- && i < max) {
        block();
        i++;
      }

      console.log(i);
      timeout(res, 0);
    });
  }
};

const nbForPromise = (max, load, block) => {
  const iterator = genePromise(max, load, block);
  const next = ({ value, done }) =>
    done || value.then((v) => next(iterator.next()));
  next(iterator.next());
};
