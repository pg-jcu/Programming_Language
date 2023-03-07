// Partial

interface IUserP {
  name: string;
  age: number;
}

// const userAP: IUserP = { // ts2741
//   name: 'A'
// };

const userBP: Partial<IUserP> = {
  name: 'B'
};