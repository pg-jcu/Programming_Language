// Pseudo-random generator

function* pseudoRandom(seed) {

  while (true) {
    let next = seed * 16807 % 2147483647;
    yield next;
    seed = next;
  }

  // solution
  // let value = seed;

  // while (true) {
  //   value = value * 16807 % 2147483647;
  //   yield value; 
  // }
}

let generator = pseudoRandom(1);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);