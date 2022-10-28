// Type aliases
type MyType = string;
type YourType = string | number | boolean;
type TUser = {
  name: string,
  age: number,
  isValid: boolean
} | [string, number, boolean];

let userObj: TUser = {
  name: 'j',
  age: 33,
  isValid: true
};
let userArr: TUser = ['1', 2, false];

function someFunc(arg: MyType): YourType {
  switch (arg) {
    case 's':
      return arg.toString();
    case 'n':
      return parseInt(arg);
    default:
      return true;
  }
}