// Type
let count = 0;
count += 1;
// count = 'text'; // ts2322

const message: string = 'hello world';

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];

// messages.push(1); // ts2345

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
// color = 'green'; // ts2322


// Function
function sum(x: number, y: number): number {
  return x + y;
}

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

function returnNothing(): void {
  console.log('return nothing...');
}