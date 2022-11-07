// Required

interface IUserR {
  name?: string,
  age?: number
}

const userAR: IUserR = {
  name: 'A'
};

// const userBR: Required<IUserR> = { // ts2741
//   name: 'B'
// };