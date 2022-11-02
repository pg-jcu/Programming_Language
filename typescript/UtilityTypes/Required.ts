// Required

interface IUserR {
  name?: string,
  age?: number
}

const userAR: IUserR = {
  name: 'A'
};

// const userBR: Required<IUserR> = { // error
//   name: 'B'
// };