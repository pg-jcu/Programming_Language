// Boolean
let isBoolean: boolean;
let isDone: boolean = false;

// Number
let num: number;
let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let infinity: number = Infinity;
let nan: number = NaN;

// String
let str: string;
let red: string = 'Red';
let green: string = 'Green';
let myColor: string = `My color is ${red}.`;
let yourColor: string = 'Your color is' + green;

// Array
let fruits1: string[] = ['Apple', 'Banana', 'Mango'];
let fruits2: Array<string> = ['Apple', 'Banana', 'Mango'];
let oneToSeven: number[] = [1, 2, 3, 4, 5, 6, 7];
let oneToSix: Array<number> = [1, 2, 3, 4, 5, 6];

// Union
let union: (string | number);
union = 'Hello type!';
union = 123;
// union = false; // error
let array1: (string | number)[] = ['Apple', 1, 2, 'Banana'];
let array2: Array<string | number> = ['Apple', 1, 2, 'Bananan'];

let anyArray: any[] = [0, 1, {}, [], false, 'str'];

interface User {
  name: string,
  age: number,
  isValid: boolean
};

let userArray: User[] = [
  {
    name: 'Jeong',
    age: 28,
    isValid: true
  }
];

let arrayOnly10: 10[] = [10];
let readOnlyArray: readonly number[] = [1, 2, 3, 4];
