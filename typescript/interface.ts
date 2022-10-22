// Interface
interface IUser {
  name: string,
  age: number
}

interface IUser {
  name: string;
  age: number;
}

interface IUser {
  name: string
  age: number
}

interface IUser {
  name: string,
  age: number,
  isAdult?: boolean // Optional property
}

let user: IUser = {
  name: 'Neo',
  age: 123
};