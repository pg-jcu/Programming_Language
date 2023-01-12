// Constraints
interface MyTypes<T extends string | number> {
  name: string;
  value: T;
}

const dataA: MyTypes<string> = {
  name: 'j',
  value: 'c'
};
// const dataB: MyTypes<boolean> = { ... }; // ts2344

type U = string | number | boolean;

type TMyType<T extends U> = string | T;

interface IUserConst<T extends U> {
  name: string;
  age: T;
}