export {};

function sum(x: number, y: number): number {
  return x + y;
}

function sub(x: number, y: number): number {
  // return null; // ts2322
  return x - y;
}

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

function returnNothing(): void {
  console.log('return nothing...');
}
