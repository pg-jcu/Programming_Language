// Readonly properties
interface IUserROP {
  readonly name: string;
  age: number;
}

let userROP: IUserROP = {
  name: 'Jeong',
  age: 28
};

userROP.age = 10;
// user1.name = 'chan'; // ts2522

// Readonly Utility
interface IUserROU {
  name: string;
  age: number;
}

let userROU: Readonly<IUserROU> = {
  name: 'jeong',
  age: 12
};

// Type assertion
let userAss = {
  name: 'uk',
  age: 33
} as const;