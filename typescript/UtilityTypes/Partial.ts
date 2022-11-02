// Partial

interface IUserP {
  name: string,
  age: number
}

// const userAP: IUserP = { // error
//   name: 'A'
// };

const userBP: Partial<IUserP> = {
  name: 'B'
};