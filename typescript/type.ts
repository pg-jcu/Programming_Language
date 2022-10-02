function add(a: number, b: number) {
  return a + b;
}

const sum: number = add(1, 2);

let strArray1: Array<string> = ['a', 'b', 'c'];
let strArray2: string[] = ['d', 'e', 'f'];

let numArray1: Array<number> = [1, 2, 3];
let numArray2: number[] = [4, 5, 6];

let arrayStrNum1: Array<string | number> = [1, 'a', 2, 'b'];
let arrayStrNum2: (string | number)[] = [3, 'c', 4, 'd'];

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

console.log(userArray);

let arrayOnly10: 10[] = [10];

let readOnlyArray: readonly number[] = [1, 2, 3, 4];

let tuple: [string, number] = ['a', 1];
let users: [number, string, boolean][] = [[1, 'str', true]];

enum Week {
  Sun,
  Mon, 
  Tue,
  Wed = 25,
  Thu,
  Fri,
  Sat
}

console.log(Week.Mon);
console.log(Week.Sat);
console.log(Week[27]); // Reverse Mapping
console.log(Week['Tue']);

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

console.log(Color.Green);

const $target = document.querySelector('#type');
const $element = document.createElement('div');
$element.id = 'type';

$target?.append($element);

$element.innerHTML = `
  function add(a: number, b: number) { <br />
    return a + b; <br />
  }  
  <br />
  const sum: number = add(1, 2);  
  <br />
  result: ${sum}
  <br />
  let isBoolean: boolean = false;
  <br />
  const str: string = 'str';
`;