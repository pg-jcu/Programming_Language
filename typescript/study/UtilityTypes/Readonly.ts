// Readonly

interface IUserReadonly {
  name: string,
  age: number
}

const userReadonly: Readonly<IUserReadonly> = {
  name: 'j',
  age: 2
};

// userReadonly.name = 'c'; // ts2540