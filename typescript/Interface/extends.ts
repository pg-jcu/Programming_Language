// extends
interface IAnimal {
  name: string
}

interface ICatEx extends IAnimal {
  meow(): string
}

// class Cats implements ICat { // error
//   meow() {
//     return 'MEOW';
//   }
// }

interface IFullName3 {
  firstName: string,
  lastName: string
}

interface IFullName3 {
  middleName: string
}

const fullName: IFullName3 = {
  firstName: 'J',
  middleName: 'C',
  lastName: 'U'
}