// Void
function hello(msg: string): void {
  console.log(`Hello ${msg}`);
}

// Never
function error(message: string): never {
  throw new Error(message);
}

const never: [] = [];
// never.push(3); // ts2345

// Intersection
interface IUser {
  name: string,
  age: number
}

interface IValidation {
  isValid: boolean
}

const heropy: IUser & IValidation = {
  name: 'Heropy',
  age: 36,
  isValid: true
};

// Function
let myFunc: (arg1: number, arg2: number) => number;
myFunc = function(x, y) {
  return x + y;
}

let yourFunc: () => void;
yourFunc = () => {
  console.log('yourFunc');
}
