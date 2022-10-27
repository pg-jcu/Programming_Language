// extends
interface IAnimal {
  name: string
}

interface ICat extends IAnimal {
  meow(): string
}

// class Cats implements ICat { // error
//   meow() {
//     return 'MEOW';
//   }
// }

interface IFullName {
  firstName: string,
  lastName: string
}

interface IFullName {
  middleName: string
}

const fullName: IFullName = {
  firstName: 'J',
  middleName: 'C',
  lastName: 'U'
}